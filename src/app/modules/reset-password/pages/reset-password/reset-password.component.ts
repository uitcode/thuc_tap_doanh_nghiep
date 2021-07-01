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
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/data/api.service';
import { MessageService } from '@app/shared/services/message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  resetForm!: FormGroup;
  passwordVisible: boolean = false;
  passwordConfirmationVisible: boolean = false;
  iconInfo: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'fill'
  };
  isLoading: boolean = false;
  token: string = '';

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
    private activatedRoute: ActivatedRoute,
    private modalService: NzModalService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = !!params.token ? params.token : null;
    });
  }

  ngOnInit(): void {
    this.resizeWindow();
    this.initForm();
  }

  resizeWindow() {
    this.innerHeight = window.innerHeight;
  }

  initForm() {
    const regexCharactersPassword = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/);
    this.resetForm = this.formBuilder.group(
      {
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
        token: [this.token]
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
    } else if (control.value !== this.resetForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  formIsValid(): boolean {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();

      for (const i in this.resetForm.controls) {
        if (this.resetForm.controls.hasOwnProperty(i)) {
          this.resetForm.controls[i].markAsDirty();
          this.resetForm.controls[i].updateValueAndValidity();
        }
      }
      return false;
    }
    return true;
  }

  submitReset() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.apiService
        .post('/auth/reset-password', this.resetForm.value)
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
          this.resetSuccess();
        });
    }
  }

  resetSuccess(): void {
    const modalSuccess: NzModalRef = this.modalService.success({
      nzTitle: '<strong>Đổi mật khẩu thành công</strong>',
      nzContent: 'Vui lòng đăng nhập lại để sử dụng!',
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzOkText: 'Đăng nhập',
      nzOkType: 'default'
    });

    modalSuccess.afterClose.subscribe(_ => {
      this.router.navigateByUrl('/login');
    });
  }
}
