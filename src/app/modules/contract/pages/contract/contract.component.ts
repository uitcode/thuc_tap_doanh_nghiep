import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
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
import { ContractRepository } from '../../contract.repository';
import { ContractDetailComponent } from '../../modals/contract-detail/contract-detail.component';
import { ContractEditComponent } from '../../modals/contract-edit/contract-edit.component';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent<IContract> extends Table implements OnInit, AfterViewInit {
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
    return this.contractRepository;
  }

  nzStatusList: any = {
    0: 'processing',
    1: 'success'
  };

  nzStatusName: any = {
    0: 'chờ',
    1: 'hoạt động'
  };

  filterFormValue = {
    name: ''
  };

  constructor(
    private contractRepository: ContractRepository,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.isLoading = false;
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

  showModalEditContract(data: any = null, id: string = '') {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: data ? 'Chỉnh sửa hợp đồng' : 'Tạo mới hợp đồng',
      nzContent: ContractEditComponent,
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

              this.submitContract(dataEdit, modalCreate, id);
            }
          }
        }
      ]
    });
  }

  editContract(id: any = null) {
    this.contractRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contract');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.showModalEditContract(resp, id);
      });
  }

  createContract() {
    this.showModalEditContract();
  }

  submitContract(httpBody: any, modalCreate: NzModalRef, idEdit: string) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;
    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;
    httpBody.suppliers = httpBody.suppliers.map(supplier => supplier.id);

    let fetchApi = idEdit
      ? this.contractRepository.update(idEdit, httpBody)
      : this.contractRepository.create(httpBody);
    fetchApi
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'contract');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess(
          idEdit ? 'Chỉnh sửa thành công' : 'Tạo hợp đồng thành công'
        );
        this.filterChange(this.filterFormValue, idEdit ? false : true);
        this.modalService.closeAll();
      });
  }

  submitDelete(idDelete: string) {
    this.contractRepository
      .delete(idDelete)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contract');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.filterChange(this.filterFormValue, false);
        this.messageService.onHttpSuccess('Xoá hợp đồng thành công');
      });
  }

  showModalDetailContract(id: string) {
    this.contractRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'contract');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        const modalDetail: NzModalRef = this.modalService.create({
          nzTitle: 'Thông tin hợp đồng',
          nzContent: ContractDetailComponent,
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
            contract: resp
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
              onClick: () => this.editContract(id)
            }
          ]
        });
      });
  }
}
