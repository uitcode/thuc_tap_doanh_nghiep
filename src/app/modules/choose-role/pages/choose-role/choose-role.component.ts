import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { ApiService } from '@app/data/api.service';
import { EditContractorsComponent } from '@app/modules/contractors/modals/edit-contractors/edit-contractors.component';
import { EditSupplierComponent } from '@app/modules/supplier/modals/edit-supplier/edit-supplier.component';
import { MessageService } from '@app/shared/services/message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrls: ['./choose-role.component.scss']
})
export class ChooseRoleComponent implements OnInit {
  logo = '../../assets/images/logo/logo-color.png';
  chooses: any = [
    {
      name: 'nhà thầu',
      icon: 'medicine-box',
      selected: false,
      key: 'constructor'
    },
    {
      name: 'nhà cung cấp',
      icon: 'shop',
      selected: false,
      key: 'supplier'
    },
    {
      name: 'khách',
      icon: 'user',
      selected: true,
      key: 'guest'
    }
  ];
  chooseCurrent: any = {
    name: 'khách',
    icon: 'user',
    selected: true,
    key: 'guest'
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeWindow();
  }
  innerHeight: number = 0;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService,
    private authService: AuthService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    let role = this.authService.getCurrentRole();
    if (role === 'constructor' || role === 'supplier' || role === 'admin') {
      if (role === 'constructor') {
        this.router.navigateByUrl('/projects');
      } else if (role === 'supplier') {
        this.router.navigateByUrl('/material');
      } else if (role === 'admin') {
        this.router.navigateByUrl('/contractors');
      }
    }
    this.resizeWindow();
  }

  resizeWindow() {
    this.innerHeight = window.innerHeight;
  }

  changeChoose(indexChoose: number) {
    for (const [index, choose] of this.chooses.entries()) {
      if (indexChoose === index) {
        this.chooseCurrent = choose;
      }
      choose.selected = indexChoose === index;
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

  chooseRole() {
    if (this.chooseCurrent.key === 'guest') {
      this.apiService
        .post('/auth/role', { role: this.chooseCurrent.key })
        .pipe(
          untilDestroyed(this),
          catchError(err => {
            this.messageService.showErrorMessage(err, 'choose-role');
            return EMPTY;
          })
        )
        .subscribe(_ => {
          this.router.navigateByUrl('/');
        });
    } else if (this.chooseCurrent.key === 'constructor') {
      this.showModalEditContractor();
    } else if (this.chooseCurrent.key === 'supplier') {
      this.showModalEditSupplier();
    }
  }

  showModalEditContractor() {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: 'Tạo mới nhà thầu',
      nzContent: EditContractorsComponent,
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
      nzMask: false,
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzComponentParams: {
        isCreate: false
      },
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
          label: 'Tạo',
          type: 'primary',
          disabled: instance => {
            return instance.isLoading;
          },
          loading: instance => {
            return instance.isLoading;
          },
          onClick: () => {
            if (modalCreate.componentInstance.formIsValid()) {
              let data = JSON.parse(
                JSON.stringify(modalCreate.componentInstance.registerForm.value)
              );
              delete data.create_account;
              delete data.email_login;
              delete data.password;
              delete data.username;
              this.submitChooseContractor(data, modalCreate);
            }
          }
        }
      ]
    });
  }

  submitChooseContractor(httpBody: any, modalCreate: NzModalRef) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;

    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;
    this.apiService
      .post('/user/constructors', httpBody)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'choose-role';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'choose-constructor');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.authService
          .fetchAuthenticatedUser()
          .pipe(untilDestroyed(this))
          .subscribe(resp => {
            modalCreate.destroy();
            this.messageService.onHttpSuccess('Tạo tài khoản nhà thầu thành công');
            this.router.navigateByUrl('/projects');
          });
      });
  }

  showModalEditSupplier() {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: 'Tạo mới nhà cung cấp',
      nzContent: EditSupplierComponent,
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
      nzMask: false,
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzComponentParams: {
        isCreate: false
      },
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
          label: 'Tạo',
          type: 'primary',
          disabled: instance => {
            return instance.isLoading;
          },
          loading: instance => {
            return instance.isLoading;
          },
          onClick: () => {
            if (modalCreate.componentInstance.formIsValid()) {
              let data = JSON.parse(
                JSON.stringify(modalCreate.componentInstance.registerForm.value)
              );
              delete data.create_account;
              delete data.email_login;
              delete data.password;
              delete data.username;
              this.submitChooseSupplier(data, modalCreate);
            }
          }
        }
      ]
    });
  }

  submitChooseSupplier(httpBody: any, modalCreate: NzModalRef) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;

    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;
    this.apiService
      .post('/user/suppliers', httpBody)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'choose-suppliers');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.authService
          .fetchAuthenticatedUser()
          .pipe(untilDestroyed(this))
          .subscribe(resp => {
            modalCreate.destroy();
            this.messageService.onHttpSuccess('Tạo tài khoản nhà cung cấp thành công');
            this.router.navigateByUrl('/material');
          });
      });
  }
}
