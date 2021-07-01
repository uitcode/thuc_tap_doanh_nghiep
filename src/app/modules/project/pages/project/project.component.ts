import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Repository } from '@app/data/repositories/repository';
import { Table } from '@app/shared/utilities/ui/table';
import { UserProjectRepository, IProject } from '@modules/project/project.repository';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { projects } from './project.data';
import { ProjectDetailComponent } from '@modules/project/modals/project-detail/project-detail.component';
import { EditProjectComponent } from '../../modals/edit-project/edit-project.component';
import { MessageService } from '@app/shared/services/message.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { listPageSize } from '@app/core/constants/config';

@UntilDestroy()
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent<IProject> extends Table implements OnInit, AfterViewInit {
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
    return this.userProjectRepository;
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
    private userProjectRepository: UserProjectRepository,
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
    // this.isLoading = false;
    // this.rows = projects;
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.heightTable = this.eleTable.nativeElement.clientHeight;
    this.cdr.detectChanges();

    // this.initData();
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

  showModalAddProject() {}

  showModalEditProject(data: any = null, id: string = '') {
    const modalCreate: NzModalRef = this.modalService.create({
      nzTitle: data ? 'Chỉnh sửa dự án' : 'Tạo mới dự án',
      nzContent: EditProjectComponent,
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

              this.submitProject(dataEdit, modalCreate, id);
            }
          }
        }
      ]
    });
  }

  editProject(id: any = null) {
    this.userProjectRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'project');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.showModalEditProject(resp, id);
      });
  }

  createProject() {
    this.showModalEditProject();
  }

  submitProject(httpBody: any, modalCreate: NzModalRef, idEdit: string) {
    let config = modalCreate.getConfig();
    config.nzClassName = 'modal-submit';
    modalCreate.updateConfig(config);
    modalCreate.componentInstance.isLoading = true;
    httpBody.ward_id = httpBody.ward_id.id;
    httpBody.district_id = httpBody.district_id.id;
    httpBody.province_id = httpBody.province_id.id;
    httpBody.suppliers = httpBody.suppliers.map(supplier => supplier.id);

    let fetchApi = idEdit
      ? this.userProjectRepository.update(idEdit, httpBody)
      : this.userProjectRepository.create(httpBody);
    fetchApi
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          modalCreate.componentInstance.isLoading = false;
          let config = modalCreate.getConfig();
          config.nzClassName = 'modal-not-submit';
          modalCreate.updateConfig(config);
          this.messageService.showErrorMessage(err, 'project');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.messageService.onHttpSuccess(idEdit ? 'Chỉnh sửa thành công' : 'Tạo dự án thành công');
        this.filterChange(this.filterFormValue, idEdit ? false : true);
        this.modalService.closeAll();
      });
  }

  submitDelete(idDelete: string) {
    this.userProjectRepository
      .delete(idDelete)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'project');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.filterChange(this.filterFormValue, false);
        this.messageService.onHttpSuccess('Xoá dự án thành công');
      });
  }

  showModalDetailProject(id: string) {
    this.userProjectRepository
      .find(id, this.defaultQueryParams)
      .pipe(
        untilDestroyed(this),
        catchError(err => {
          this.messageService.showErrorMessage(err, 'project');
          return EMPTY;
        })
      )
      .subscribe(resp => {
        const modalDetail: NzModalRef = this.modalService.create({
          nzTitle: 'Thông tin dự án',
          nzContent: ProjectDetailComponent,
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
            project: resp
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
              onClick: () => this.editProject(id)
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
