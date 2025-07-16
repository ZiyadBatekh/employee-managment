import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EmployeesListComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    ConfirmDialogModule
  ],
  exports: [
    EmployeesListComponent,
    AddEditEmployeeComponent
  ]
})
export class EmployeesModule {}
