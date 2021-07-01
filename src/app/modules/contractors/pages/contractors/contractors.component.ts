import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
  ChangeDetectorRef
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { listPageSize } from '@app/core/constants/config';
import { Repository } from '@app/data/repositories/repository';
import { MessageService } from '@app/shared/services/message.service';
import { Table } from '@app/shared/utilities/ui/table';
import { untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContractorsAdminRepository } from '../../contractors.repository';
import { ContractorsDetailComponent } from '../../modals/contractors-detail/contractors-detail.component';
import { EditContractorsComponent } from '../../modals/edit-contractors/edit-contractors.component';
import { contractors } from './contractors.data';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent<IContractors> extends Table implements OnInit, AfterViewInit {
  @ViewChild('eleSearch', { read: ElementRef }) eleSearch: ElementRef;
  @ViewChild('eleTable', { read: ElementRef }) eleTable: ElementRef;
  heightTable: number = 0;
  innerWidth: number = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.heightTable = this.eleTable.nativeElement.clientHeight;
    this.innerWidth = window.innerWidth;
  }
  listPageSize = listPageSize;

  repository(): Repository {
    return this.contractorsAdminRepository;
  }

  nzStatusList: any = {
    0: 'error',
    1: 'success',
    2: 'processing'
  };

  nzStatusName: any = {
    0: 'bị khoá',
    1: 'hoạt động',
    2: 'mới tạo'
  };

  filterFormValue = {
    name: ''
  };

  constructor(
    private contractorsAdminRepository: ContractorsAdminRepository,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.heightTable = this.eleTable.nativeElement.clientHeight;
    this.cdr.detectChanges();
  }

  private initForm(): void {
    this.filterForm = this.fb.group({
      name: ''
    });
  }

  keywordFilterChange() {
    this.filterFormValue.name = this.filterForm.value.name;
    this.filterChange(this.filterFormValue, true);
  }

  // showModalEditContractor(data: any = null) {
  //   const modalDetail: NzModalRef = this.modalService.create({
  //     nzTitle: data ? 'Chỉnh sửa nhà thầu' : 'Tạo mới nhà thầu',
  //     nzContent: EditContractorsComponent,
  //     nzMaskClosable: false,
  //     nzClosable: true,
  //     nzWidth: '500px',
  //     nzBodyStyle: {
  //       maxHeight: '60vh',
  //       paddingTop: '14px',
  //       paddingBottom: '14px',
  //       overflow: 'auto'
  //     },
  //     nzStyle: { paddingBottom: '0' },
  //     nzCentered: true,
  //     nzComponentParams: {
  //       isCreate: true
  //     },
  //     nzFooter: [
  //       {
  //         label: 'Đóng',
  //         type: 'default',
  //         onClick: () => modalDetail.destroy()
  //       },
  //       {
  //         label: data ? 'Lưu thay đổi' : 'Tạo',
  //         type: 'primary',
  //         onClick: () => {}
  //       }
  //     ]
  //   });
  // }

  showModalEditContractors(data: any = null, id: string = '') {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: data ? 'Chỉnh sửa nhà thầu' : 'Tạo mới nhà thầu',
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
      nzStyle: { paddingBottom: '0' },
      nzCentered: true,
      nzComponentParams: {
        dataEdit: data
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
          label: data ? 'Lưu thay đổi' : 'Tạo',
          type: 'primary',
          disabled: instance => {
            return instance.isLoading;
          },
          loading: instance => {
            return instance.isLoading;
          },
          onClick: () => {
            if (modalCreate.componentInstance.formIsValid()) {
              let dataEdit = JSON.parse(
                JSON.stringify(modalCreate.componentInstance.registerForm.value)
              );

              this.submitContractors(dataEdit, modalCreate, id);
            }
          }
        }
      ]
    });
  }

  editContractors(id: any = null) {
    this.contractorsAdminRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contractors');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.showModalEditContractors(resp, id);
      });
  }

  createContractors() {
    this.showModalEditContractors();
  }

  submitContractors(httpBody: any, modalCreate: NzModalRef, idEdit: string) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;
    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;

    let fetchApi = idEdit
      ? this.contractorsAdminRepository.update(idEdit, httpBody)
      : this.contractorsAdminRepository.create(httpBody);
    fetchApi
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'contractors');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess(
          idEdit ? 'Chỉnh sửa thành công' : 'Tạo tài khoản nhà thầu thành công'
        );
        this.filterChange(this.filterFormValue, idEdit ? false : true);
        this.modalService.closeAll();
      });
  }

  submitDelete(idDelete: string) {
    this.contractorsAdminRepository
      .delete(idDelete)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contractors');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.filterChange(this.filterFormValue, false);
        this.messageService.onHttpSuccess('Xoá nhà thầu thành công');
      });
  }

  showModalDetailSupplier(id: string) {
    this.contractorsAdminRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contractors');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        const modalDetail: NzModalRef = this.modalService.create({
          nzTitle: 'Thông tin nhà thầu',
          nzContent: ContractorsDetailComponent,
          nzMaskClosable: false,
          nzClosable: true,
          nzWidth: '500px',
          nzBodyStyle: {
            maxHeight: '60vh',
            paddingTop: '14px',
            paddingBottom: '14px',
            overflow: 'auto'
          },
          nzStyle: { paddingBottom: '0' },
          nzCentered: true,
          nzComponentParams: {
            contractors: resp
          },
          nzFooter: [
            {
              label: 'Đóng',
              type: 'default',
              onClick: () => modalDetail.destroy()
            },
            {
              label: 'Chỉnh sửa',
              type: 'primary',
              onClick: () => this.editContractors(id)
            }
          ]
        });
      });
  }

  clearSearch() {
    this.filterForm.controls['name'].setValue('');
    this.eleSearch.nativeElement.focus();
  }
}
