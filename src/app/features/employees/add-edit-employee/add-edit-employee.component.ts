import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Employee } from '../../../shared/models/employee.model';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss'], 
  standalone:false
})
export class AddEditEmployeeComponent {
  employeeForm!: FormGroup;
  isEditMode = false;
  uploadedImage: string | null = null;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.isEditMode = !!this.config.data?.employee;

    this.employeeForm = this.fb.group({
      id: [this.isEditMode ? this.config.data.employee.id : null],
      name: [this.isEditMode ? this.config.data.employee.name : '', Validators.required],
      department: [this.isEditMode ? this.config.data.employee.department : '', Validators.required],
      hireDate: [this.isEditMode ? this.config.data.employee.hireDate : '', Validators.required],
      status: [this.isEditMode ? this.config.data.employee.status : 'active', Validators.required],
      image: [this.isEditMode ? this.config.data.employee.image : '']
    });

    this.uploadedImage = this.employeeForm.value.image || null;
  }

  onImageUpload(event: any) {
    const file = event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImage = reader.result as string;
        this.employeeForm.patchValue({ image: this.uploadedImage });
      };
      reader.readAsDataURL(file);
    }
  }

  save() {
    if (this.employeeForm.valid) {
      this.ref.close(this.employeeForm.value);
    }
  }

  cancel() {
    this.ref.close();
  }
}
