import { Component, HostListener, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '@app/shared/services/message.service';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  loginForm!: FormGroup;
  passwordVisible: boolean = false;
  forgot: boolean = true;
  isLoading: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow();
  }
  innerHeight: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this.resizeWindow();
    this.initForm();

    this.route.queryParams.subscribe(params => {
      if (params?.email === 'is_verified') {
        this.messageService.onHttpSuccess(
          'Xác thực email thành công, vui lòng đăng nhập để tiếp tục sử dụng',
          6000
        );
        this._window.history.pushState(
          'noti',
          'Xác thực email thành công | Thông tin tài khoản',
          '/me'
        );
      }
    });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      credential: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.authService
        .login(this.loginForm.value)
        .pipe(
          untilDestroyed(this),
          catchError(err => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err, 'login');
            return EMPTY;
          })
        )
        .subscribe(_ => {
          let role = this.authService.getCurrentRole();
          if (role === 'guest' || role === null) {
            this.router.navigateByUrl('/choose-role');
          } else if (role === 'constructor') {
            this.router.navigateByUrl('/projects');
          } else if (role === 'supplier') {
            this.router.navigateByUrl('/material');
          } else if (role === 'admin') {
            this.router.navigateByUrl('/contractors');
          }
          this.isLoading = false;
        });
    }
  }

  resizeWindow() {
    this.innerHeight = window.innerHeight;
  }
}
