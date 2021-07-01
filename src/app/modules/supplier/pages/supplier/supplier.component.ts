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
import { Repository } from '@app/data/repositories/repository';
import { MessageService } from '@app/shared/services/message.service';
import { Table } from '@app/shared/utilities/ui/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EditSupplierComponent } from '../../modals/edit-supplier/edit-supplier.component';
import { SupplierAdminRepository, SupplierUserRepository } from '../../supplier.repository';
import { SupplierDetailComponent } from '../../modals/supplier-detail/supplier-detail.component';
import { listPageSize } from '@app/core/constants/config';

@UntilDestroy()
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent<ISupplier> extends Table implements OnInit, AfterViewInit {
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
    return this.supplierAdminRepository;
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
    private supplierAdminRepository: SupplierAdminRepository,
    private supplierUserRepository: SupplierUserRepository,
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

  showModalEditSupplier(data: any = null, id: string = '') {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: data ? 'Chỉnh sửa nhà cung cấp' : 'Tạo mới nhà cung cấp',
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

              this.submitSupplier(dataEdit, modalCreate, id);
            }
          }
        }
      ]
    });
  }

  editSupplier(id: any = null) {
    this.supplierAdminRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'supplier');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.showModalEditSupplier(resp, id);
      });
  }

  createSupplier() {
    this.showModalEditSupplier();
  }

  submitSupplier(httpBody: any, modalCreate: NzModalRef, idEdit: string) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;
    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;

    let fetchApi = idEdit
      ? this.supplierAdminRepository.update(idEdit, httpBody)
      : this.supplierAdminRepository.create(httpBody);
    fetchApi
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'supplier');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess(
          idEdit ? 'Chỉnh sửa thành công' : 'Tạo tài khoản nhà cung cấp thành công'
        );
        this.filterChange(this.filterFormValue, idEdit ? false : true);
        this.modalService.closeAll();
      });
  }

  submitDelete(idDelete: string) {
    this.supplierAdminRepository
      .delete(idDelete)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'supplier');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.filterChange(this.filterFormValue, false);
        this.messageService.onHttpSuccess('Xoá nhà cung cấp thành công');
      });
  }

  showModalDetailSupplier(id: string) {
    this.supplierAdminRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'supplier');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        const modalDetail: NzModalRef = this.modalService.create({
          nzTitle: 'Thông tin nhà cung cấp',
          nzContent: SupplierDetailComponent,
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
            supplier: resp
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
              onClick: () => this.editSupplier(id)
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
