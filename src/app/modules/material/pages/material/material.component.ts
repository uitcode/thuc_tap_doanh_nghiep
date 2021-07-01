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
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MaterialRepository } from '../../material.repository';
import { MaterialDetailComponent } from '../../modals/material-detail/material-detail.component';
import { MaterialEditComponent } from '../../modals/material-edit/material-edit.component';

@UntilDestroy()
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent<IMaterial> extends Table implements OnInit, AfterViewInit {
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
    return this.materialRepository;
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
    private materialRepository: MaterialRepository,
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

  showModalEditMaterial(data: any = null, id: string = '') {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: data ? 'Chỉnh sửa vật tư' : 'Tạo mới vật tư',
      nzContent: MaterialEditComponent,
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

              this.submitMaterial(dataEdit, modalCreate, id);
            }
          }
        }
      ]
    });
  }

  editMaterial(id: any = null) {
    this.materialRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'material');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.showModalEditMaterial(resp, id);
      });
  }

  createMaterial() {
    this.showModalEditMaterial();
  }

  submitMaterial(httpBody: any, modalCreate: NzModalRef, idEdit: string) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;

    let fetchApi = idEdit
      ? this.materialRepository.update(idEdit, httpBody)
      : this.materialRepository.create(httpBody);
    fetchApi
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'material');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess(
          idEdit ? 'Chỉnh sửa thành công' : 'Tạo vật tư thành công'
        );
        this.filterChange(this.filterFormValue, idEdit ? false : true);
        this.modalService.closeAll();
      });
  }

  submitDelete(idDelete: string) {
    this.materialRepository
      .delete(idDelete)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'material');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.filterChange(this.filterFormValue, false);
        this.messageService.onHttpSuccess('Xoá vật tư thành công');
      });
  }

  showModalDetailMaterial(id: string) {
    this.materialRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'material');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        const modalDetail: NzModalRef = this.modalService.create({
          nzTitle: 'Thông tin vật tư',
          nzContent: MaterialDetailComponent,
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
            material: resp
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
              onClick: () => this.editMaterial(id)
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
