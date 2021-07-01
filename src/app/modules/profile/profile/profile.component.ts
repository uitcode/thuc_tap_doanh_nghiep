import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { StorageService } from '@app/core/services/storage.service';
import { ApiService } from '@app/data/api.service';
import { MessageService } from '@app/shared/services/message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY, Observable, timer } from 'rxjs';
import { catchError, debounceTime, filter, map, take } from 'rxjs/operators';
import { ChangePasswordComponent } from '../modals/change-password/change-password.component';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  innerWidth: number = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  @ViewChild('eleInputAvatar', { read: ElementRef }) eleInputAvatar!: ElementRef;
  avatarDefault: string = '../../assets/images/avatar/avatar.png';
  avatar: string = '';
  registerForm!: FormGroup;
  info: any = {};
  userInfo: any;
  previewAvatarImage: any;
  isLoadingAvatar: boolean = false;
  isLoadingUpdateProfile: boolean = false;
  isLoadingResendVerifyEmail: boolean = false;
  checkFirstData: boolean = true;
  redirectUrl: string = '';
  counter$: Observable<number>;
  countdownResend = 0;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private apiService: ApiService,
    private messageService: MessageService,
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.authService.currentUser$.pipe().subscribe(resp => {
      if (resp) {
        this.userInfo = resp?.data;
        this.avatar = resp?.data?.avatar;
        if (this.checkFirstData) {
          this.initForm();
          this.checkFirstData = false;
        }
      }
    });

    // this.initChangePassForm();

    this.route.queryParams.subscribe(params => {
      if (params?.email === 'is_verified') {
        this.messageService.onHttpSuccess('Xác thực email thành công', 6000);
        this._window.history.pushState(
          'noti',
          'Xác thực email thành công | Thông tin tài khoản',
          '/me'
        );
      } else {
        if (!this.storageService.getLocalValue('udjdudowu')) {
          this.storageService.setLocalValue('udjdudowu', '0');
        } else if (parseInt(this.storageService.getLocalValue('udjdudowu')) > 0) {
          this.countdownResend = parseInt(this.storageService.getLocalValue('udjdudowu'));
          this.counter$ = timer(0, 1000).pipe(
            take(this.countdownResend),
            map(() => {
              this.storageService.setLocalValue('udjdudowu', --this.countdownResend + '');
              if (this.userInfo?.email_verified_at) {
                this.countdownResend = 0;
                return this.countdownResend;
              } else {
                return this.countdownResend;
              }
            })
          );
        }
      }
    });
  }

  initForm() {
    let regexEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    let url = this._window.location.href;
    let arrayUrl = url.split('/');
    this.redirectUrl = arrayUrl[0] + '//' + arrayUrl[2] + '/me?email=is_verified';

    this.registerForm = this.formBuilder.group(
      {
        display_name: [this.userInfo?.display_name ?? '', [Validators.required]],
        email: [this.userInfo?.email ?? '', [Validators.required, Validators.pattern(regexEmail)]],
        username: [this.userInfo?.username ?? '', [Validators.required]],
        redirect_url: [this.redirectUrl]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  chooseAvatar() {
    this.eleInputAvatar.nativeElement.click();
  }

  selectFile(data: any) {
    let size = data.target.files[0].size / 1024;
    if (size > 1024) {
      this.messageService.onHttpFail('Vui lòng sử dụng ảnh < 1MB');
    } else {
      let imageData = <File>data.target.files[0];
      this.previewAvatar(imageData);
      this.uploadAvatar(imageData);
    }
  }

  previewAvatar(imageData) {
    let mimeType = imageData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(imageData);
    reader.onload = _event => {
      this.previewAvatarImage = reader.result;
    };
  }

  uploadAvatar(imageData) {
    const fd = new FormData();
    fd.append('avatar', imageData);
    this.isLoadingAvatar = true;
    this.apiService
      .post(`/auth/avatar`, fd)
      .pipe(
        untilDestroyed(this),
        debounceTime(500),
        catchError(err => {
          this.isLoadingAvatar = false;
          this.messageService.onHttpFail('Cập nhật ảnh đại diện thất bại');
          return EMPTY;
        })
      )
      .subscribe(_ => {
        this.authService
          .fetchAuthenticatedUser()
          .pipe(untilDestroyed(this))
          .subscribe(_ => {});
        this.isLoadingAvatar = false;
        this.messageService.onHttpSuccess('Cập nhật ảnh đại diện thành công');
      });
  }

  submitEditProfile() {
    if (this.formIsValid()) {
      this.isLoadingUpdateProfile = true;
      this.apiService
        .post('/auth/update-profile', this.registerForm.value)
        .pipe(
          untilDestroyed(this),
          debounceTime(500),
          catchError(err => {
            this.isLoadingUpdateProfile = false;
            this.messageService.showErrorMessage(err, 'update-profile');
            return EMPTY;
          })
        )
        .subscribe(resp => {
          this.authService
            .fetchAuthenticatedUser()
            .pipe(untilDestroyed(this))
            .subscribe(_ => {});
          this.isLoadingUpdateProfile = false;
          this.messageService.onHttpSuccess('Cập nhật thông tin tài khoản thành công');
        });
    }
  }

  submitResendEmailVerification() {
    this.isLoadingResendVerifyEmail = true;
    this.apiService
      .post('/auth/resend-verification', { redirect_url: this.redirectUrl })
      .pipe(
        untilDestroyed(this),
        debounceTime(500),
        catchError(err => {
          this.isLoadingResendVerifyEmail = false;
          this.messageService.showErrorMessage(err, 'resend-email-verify');
          return EMPTY;
        })
      )
      .subscribe(_ => {
        this.isLoadingResendVerifyEmail = false;
        this.countdownResend = 120;
        this.counter$ = timer(0, 1000).pipe(
          take(this.countdownResend),
          map(() => {
            this.storageService.setLocalValue('udjdudowu', --this.countdownResend + '');
            return this.countdownResend;
          })
        );
        this.messageService.onHttpSuccess(
          `Gửi yêu cầu xác thực thành công. Vui lòng kiểm tra hộp thư email (${this.registerForm.value.email}) để hoàn thành việc xác thực`,
          8000
        );
      });
  }

  showModalChangePassword() {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: 'Thay đổi mật khẩu',
      nzContent: ChangePasswordComponent,
      nzMaskClosable: false,
      nzClosable: true,
      nzWidth: '500px',
      nzBodyStyle: {
        maxHeight: '60vh',
        paddingTop: '14px',
        paddingBottom: '14px',
        overflow: 'auto'
      },
      nzClassName: 'modal-not-submit',
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzFooter: [
        {
          label: 'Đóng',
          type: 'default',
          disabled: instance => {
            return instance.isLoading;
          },
          onClick: () => modalCreate.destroy()
        },
        {
          label: 'Đổi mật khẩu',
          type: 'primary',
          disabled: instance => {
            return instance.isLoading;
          },
          loading: instance => {
            return instance.isLoading;
          },
          onClick: () => {
            if (modalCreate.componentInstance.formIsValidChangePass()) {
              let dataEdit = JSON.parse(
                JSON.stringify(modalCreate.componentInstance.changePassForm.value)
              );
              this.submitChangePassword(dataEdit, modalCreate);
            }
          }
        }
      ]
    });
  }

  submitChangePassword(httpBody: any, modalCreate: NzModalRef) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;

    this.apiService
      .post('/auth/update-password', httpBody)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'change-pass');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess('Thay đổi mật khẩu thành công');
        this.modalService.closeAll();
      });
  }

  logout() {
    this.authService
      .logout()
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          return EMPTY;
        })
      )
      .subscribe(_ => {
        this.router.navigateByUrl('/login');
      });
  }

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

  updateInfo() {
    this.formIsValid();
  }
}
