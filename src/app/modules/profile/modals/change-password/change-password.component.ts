import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassForm!: FormGroup;
  iconInfo: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'fill'
  };
  passwordVisible: boolean = false;
  passwordConfirmationVisible: boolean = false;
  passwordOldVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initChangePassForm();
  }

  initChangePassForm() {
    const regexCharactersPassword = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/);
    this.changePassForm = this.formBuilder.group(
      {
        old_password: ['', [Validators.required]],
        new_password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32),
            this.regexValidator(new RegExp(regexCharactersPassword), { regex_characters: 's' })
          ]
        ],
        new_password_confirmation: ['', [this.confirmValidator]]
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
    } else if (control.value !== this.changePassForm.controls.new_password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  formIsValidChangePass(): boolean {
    if (this.changePassForm.invalid) {
      this.changePassForm.markAllAsTouched();

      for (const i in this.changePassForm.controls) {
        if (this.changePassForm.controls.hasOwnProperty(i)) {
          this.changePassForm.controls[i].markAsDirty();
          this.changePassForm.controls[i].updateValueAndValidity();
        }
      }
      return false;
    }
    return true;
  }

  submit() {
    this.formIsValidChangePass();
  }
}
