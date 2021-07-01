import { Observable } from 'rxjs';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { ILocation, LocationService } from '@app/shared/services/location.service';

@Component({
  selector: 'app-edit-contractors',
  templateUrl: './edit-contractors.component.html',
  styleUrls: ['./edit-contractors.component.scss']
})
export class EditContractorsComponent implements OnInit {
  @Input() dataEdit: any;
  @Input() isCreate: boolean = true;
  registerForm!: FormGroup;
  isLoading: boolean = false;
  passwordVisible: boolean = false;
  iconInfo: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'fill'
  };

  regexEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  regexCharactersPassword = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/);
  listProvince: Observable<any>;
  listDistrict: Observable<any>;
  listWard: Observable<any>;
  firstSetValueSelect: boolean = true;
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.id === o2.id : o1 === o2);
  constructor(
    private formBuilder: FormBuilder,
    private locationService: LocationService,
    @Inject(Window) private _window: Window
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.listProvince = this.locationService.getListProvince();
    if (this.dataEdit) {
      this.getDistrict(this.dataEdit?.location?.province);
      this.getWard(this.dataEdit?.location?.district);
    }
    this.firstSetValueSelect = false;
    if (this.isCreate && this.dataEdit) {
      this.registerForm.removeControl('username');
      this.registerForm.removeControl('usermail');
      this.registerForm.removeControl('password');
    }
  }

  initForm() {
    let url = this._window.location.href;
    let arrayUrl = url.split('/');
    let redirect_url = arrayUrl[0] + '//' + arrayUrl[2] + '/login';
    this.registerForm = this.formBuilder.group(
      {
        name: [this.dataEdit?.name ?? '', [Validators.required]],
        sub_name: [this.dataEdit?.sub_name ?? ''],
        phone: [
          this.dataEdit?.phone ?? '',
          [Validators.required, this.checkNumberPhone({ regex_phone: 's' })]
        ],
        tax_number: [this.dataEdit?.tax_number ?? ''],
        email: [
          this.dataEdit?.email ?? '',
          [Validators.required, Validators.pattern(this.regexEmail)]
        ],
        // create_account: [true, { updateOn: 'change' }],
        username: [
          this.isCreate && !this.dataEdit ? this.dataEdit?.username ?? '' : 'default',
          [Validators.required]
        ],
        usermail: [
          this.isCreate ? '' : 'default@gmail.com',
          [Validators.required, Validators.pattern(this.regexEmail)]
        ],
        password: [
          this.isCreate && !this.dataEdit ? this.dataEdit?.password ?? '' : 'default1A',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32),
            this.regexValidator(new RegExp(this.regexCharactersPassword), { regex_characters: 's' })
          ]
        ],
        ward_id: [
          this.dataEdit?.location?.ward ?? '',
          { updateOn: 'change', validators: [Validators.required] }
        ],
        district_id: [
          this.dataEdit?.location?.district ?? '',
          { updateOn: 'change', validators: [Validators.required] }
        ],
        province_id: [
          this.dataEdit?.location?.province ?? '',
          { updateOn: 'change', validators: [Validators.required] }
        ],
        address: [this.dataEdit?.location?.address ?? '', [Validators.required]],
        login_url: [redirect_url]
      },
      {
        updateOn: 'blur'
      }
    );
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

  create() {
    this.formIsValid();
  }

  showAddNewAccount(event: any) {
    if (event) {
      this.registerForm.controls.username.setValidators([Validators.required]),
        this.registerForm.controls.email_login.setValidators([
          Validators.required,
          Validators.pattern(this.regexEmail)
        ]),
        this.registerForm.controls.password.setValidators([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
          this.regexValidator(new RegExp(this.regexCharactersPassword), { regex_characters: 's' })
        ]);
    } else {
      this.registerForm.controls.username.setValidators([]),
        this.registerForm.controls.email_login.setValidators([]),
        this.registerForm.controls.password.setValidators([]);
    }
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

  checkNumberPhone(error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regexLandlinePhone =
        /((0212|0213|0214|0215|0216|0218|0203|0204|0205|0206|0207|0208|0209|0210|0219|0211|0220|0221|0222|024|0225|0226|0227|0228|0229|0232|0233|0234|0235|0236|0237|0238|0239|0252|0255|0256|0257|0258|0259|0260|0261|0262|0263|0269|028|0251|0254|0271|0274|0276|0270|0272|0273|0275|0290|0291|0292|0293|0294|0296|0297|0299)+([0-9]{7})\b)/g;
      const regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      const regexSwitchboardPhone = /((1900|1800)+([0-9]{4,6})\b)/g;
      const valid =
        regexPhone.test(control.value) ||
        regexSwitchboardPhone.test(control.value) ||
        regexLandlinePhone.test(control.value);
      return valid ? null : error;
    };
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
}
