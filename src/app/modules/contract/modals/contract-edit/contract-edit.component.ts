import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent implements OnInit, AfterViewInit {
  @Input() dataEdit: any;
  @ViewChild('elePickerSigning', { static: false }) elePickerSigning: any;
  isLoading: boolean = false;
  registerForm!: FormGroup;
  time = new Date();
  show_time: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.elePickerSigning.elementRef.nativeElement.children[0].children[0].setAttribute(
      'inputmode',
      'none'
    );
  }

  initForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: [this.dataEdit?.name ?? '', [Validators.required]],
        sub_name: [this.dataEdit?.sub_name ?? ''],
        contractor: [this.dataEdit?.contractor ?? '', [Validators.required]],
        supplier: [this.dataEdit?.supplier ?? '', [Validators.required]],
        contractor_check: [this.dataEdit?.contractor_check ?? 0],
        supplier_check: [this.dataEdit?.supplier_check ?? 0],
        signing_date: [this.dataEdit?.signing_date ?? null],
        end_date: [this.dataEdit?.end_date ?? null],
        created_date: [this.dataEdit?.created_date ?? null]
      },
      {
        updateOn: 'blur'
      }
    );
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
