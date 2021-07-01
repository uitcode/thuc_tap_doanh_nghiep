import { ApiService } from '@app/data/api.service';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MessageService } from '@app/shared/services/message.service';
import { LocationService } from '@app/shared/services/location.service';

interface ISupplier {
  id: string;
  name: string;
}

interface ILocation {
  id: number;
  name: string;
}

@UntilDestroy()
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProjectComponent implements OnInit {
  @Input() dataEdit: any;
  @Input() isCreate: boolean = true;
  registerForm!: FormGroup;
  isLoading: boolean = false;
  isLoadingSelect: boolean = false;
  searchChange$ = new BehaviorSubject('');
  listSupplier: ISupplier[] = [];
  totalSupplier: number = 0;
  pageIndexSelect: number = 1;
  searchValue: string = '';
  beforeSearchValue: string = '';
  valueSearch$: Observable<string>;
  valueSearch = new Subject();
  listProvince: Observable<any>;
  listDistrict: Observable<any>;
  listWard: Observable<any>;
  firstSetValueSelect: boolean = true;
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.id === o2.id : o1 === o2);

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.getListOption();
    this.initForm();
    this.listProvince = this.locationService.getListProvince();
    if (this.dataEdit) {
      this.getDistrict(this.dataEdit?.location?.province);
      this.getWard(this.dataEdit?.location?.district);
    }
    this.firstSetValueSelect = false;

    this.valueSearch.pipe(debounceTime(1000)).subscribe((resp: any) => {
      this.searchValue = resp;
      this.pageIndexSelect = 1;

      if (this.beforeSearchValue !== resp) {
        this.listSupplier = [];
        this.getListOption(1, resp);
      }
    });
  }

  initForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: [this.dataEdit?.name ?? '', [Validators.required]],
        sub_name: [this.dataEdit?.sub_name ?? ''],
        is_active: [this.dataEdit?.is_active ?? true],
        suppliers: [
          this.dataEdit?.suppliers.length ? this.mapSupplier(this.dataEdit?.suppliers) : null
        ],
        ward_id: [this.dataEdit?.location?.ward ?? '', [Validators.required]],
        district_id: [this.dataEdit?.location?.district ?? '', [Validators.required]],
        province_id: [this.dataEdit?.location?.province ?? '', [Validators.required]],
        address: [this.dataEdit?.location?.address ?? '', [Validators.required]]
      }
      // {
      //   updateOn: 'blur'
      // }
    );
  }

  onSearch(value: string): void {
    this.valueSearch.next(value);
  }

  getFirstSelect(): any {}

  getListOption(pageNumber: number = 1, search: string = ''): any {
    this.isLoadingSelect = true;
    return this.apiService
      .get(
        `/user/suppliers?page[size]=5&page[number]=${pageNumber}${
          search ? '&filter[name]=' + search : ''
        }&sort=-created_at`
      )
      .pipe(
        debounceTime(500),
        untilDestroyed(this),
        catchError(err => {
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.isLoadingSelect = false;
        this.totalSupplier = resp.body.pagination.total;
        let listResp = resp.body.data.map((item: any) => ({
          id: item.id,
          name: item.name
        }));
        this.beforeSearchValue = search;
        this.listSupplier = this.listSupplier.concat(listResp);
      });
  }

  loadMoreOptionSupplier() {
    if (this.listSupplier.length < this.totalSupplier) {
      this.getListOption(++this.pageIndexSelect, this.searchValue);
    }
  }

  getDistrict(provinceId: ILocation) {
    if (!this.firstSetValueSelect) {
      this.registerForm.controls['district_id'].setValue('');
      this.registerForm.controls['ward_id'].setValue('');
    }
    this.listDistrict = this.locationService.getListDistrict(provinceId);
  }

  getWard(districtId: ILocation) {
    if (!this.firstSetValueSelect) {
      this.registerForm.controls['ward_id'].setValue('');
    }
    this.listWard = this.locationService.getListWard(
      this.registerForm.value.province_id,
      districtId
    );
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

  mapSupplier(listSupplier: any[]): ISupplier[] {
    return listSupplier.map((supplier: any) => ({
      name: supplier.name,
      id: supplier.id
    }));
  }
}
