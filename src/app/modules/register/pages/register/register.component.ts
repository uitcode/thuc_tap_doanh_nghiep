import { ApiService } from '@data/api.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from '@app/shared/services/message.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@UntilDestroy()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  registerForm!: FormGroup;
  passwordVisible: boolean = false;
  passwordConfirmationVisible: boolean = false;
  forgot: boolean = true;
  iconInfo: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'fill'
  };
  isLoading: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow();
  }
  innerHeight: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(Window) private _window: Window,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.resizeWindow();
    this.initForm();
  }

  initForm() {
    const regexEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const regexCharactersPassword = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/);
    let url = this._window.location.href;
    let arrayUrl = url.split('/');
    let redirect_url = arrayUrl[0] + '//' + arrayUrl[2] + '/login';
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(regexEmail)]],
        username: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32),
            this.regexValidator(new RegExp(regexCharactersPassword), { regex_characters: 's' })
          ]
        ],
        password_confirmation: ['', [this.confirmValidator]],
        redirect_url: [redirect_url]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = regex.test(control.value);
      return valid ? null : error;
    };
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  formIsValid(): boolean {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();

      for (const i in this.registerForm.controls) {
        if (this.registerForm.controls.hasOwnProperty(i)) {
          this.registerForm.controls[i].markAsDirty();
          this.registerForm.controls[i].updateValueAndValidity();
        }
      }
      return false;
    }
    return true;
  }

  submitRegister() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.apiService
        .post('/auth/register', this.registerForm.value)
        .pipe(
          untilDestroyed(this),
          catchError(err => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err, 'register');
            return EMPTY;
          })
        )
        .subscribe(_ => {
          this.isLoading = false;
          this.registerSuccess();
        });
    }
  }

  registerSuccess(): void {
    const modalSuccess: NzModalRef = this.modalService.success({
      nzTitle: '<strong>Đăng ký tài khoản thành công</strong>',
      nzContent: 'Vui lòng kiểm tra email và xác thực tài khoản để tiếp tục sử dụng!',
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzOkText: 'Trở về',
      nzOkType: 'default'
    });

    modalSuccess.afterClose.subscribe(_ => {
      this.router.navigateByUrl('/login');
    });
  }

  resizeWindow() {
    this.innerHeight = window.innerHeight;
  }
}
