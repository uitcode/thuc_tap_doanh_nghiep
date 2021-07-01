import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { ApiService } from '@app/data/api.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {
  @Input() dataEdit: any;
  isLoading: boolean = false;
  registerForm!: FormGroup;

  options = [{ name: 'mét' }];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.initForm();
    this.getSuggestion();
  }

  initForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: [this.dataEdit?.name ?? '', [Validators.required]],
        unit: [this.dataEdit?.unit ?? '', [Validators.required]],
        price: [this.dataEdit?.price ?? '', [Validators.required, Validators.pattern(/^[.\d]+$/)]]
      },
      {
        updateOn: 'blur'
      }
    );
  }

  getSuggestion() {
    this.apiService
      .get('/supply-units')
      .pipe(
        untilDestroyed(this),
        catchError(_ => {
          return EMPTY;
        })
      )
      .subscribe(resp => {
        this.options = resp?.body?.data;
      });
  }

  create() {
    this.formIsValid();
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
