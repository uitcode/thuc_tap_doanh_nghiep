import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@app/data/api.service';
import { MessageService } from '@app/shared/services/message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  forgotForm!: FormGroup;
  isLoading: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow();
  }
  innerHeight: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
    private modalService: NzModalService,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this.resizeWindow();
    this.initForm();
  }

  resizeWindow() {
    this.innerHeight = window.innerHeight;
  }

  initForm() {
    const regexEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let url = this._window.location.href;
    let arrayUrl = url.split('/');
    let redirect_url = arrayUrl[0] + '//' + arrayUrl[2] + '/reset-password';
    this.forgotForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(regexEmail)]],
        redirect_url: [redirect_url]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  formIsValid(): boolean {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();

      for (const i in this.forgotForm.controls) {
        if (this.forgotForm.controls.hasOwnProperty(i)) {
          this.forgotForm.controls[i].markAsDirty();
          this.forgotForm.controls[i].updateValueAndValidity();
        }
      }
      return false;
    }
    return true;
  }

  submitForgot() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.apiService
        .post('/auth/forgot-password', this.forgotForm.value)
        .pipe(
          untilDestroyed(this),
          catchError(err => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err, 'forgot-password');
            return EMPTY;
          })
        )
        .subscribe(_ => {
          this.isLoading = false;
          this.forgotSuccess();
        });
    }
  }

  forgotSuccess(): void {
    const modalSuccess: NzModalRef = this.modalService.success({
      nzTitle: '<strong>Yêu cầu lấy lại mật khẩu thành công</strong>',
      nzContent: 'Vui lòng kiểm tra email để đặt lại mật khẩu!',
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzOkText: 'Trở về',
      nzOkType: 'default'
    });

    modalSuccess.afterClose.subscribe(_ => {
      this.router.navigateByUrl('/login');
    });
  }
}
