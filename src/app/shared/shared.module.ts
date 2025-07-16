import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './layout/header/header.component';
import { SmartFiltersComponent } from './components/smart-filters/smart-filters.component';

const PRIMENG_MODULES = [
  InputTextModule,
  ButtonModule,
  DialogModule,
  DynamicDialogModule,
  ConfirmDialogModule,
  CalendarModule,
  DropdownModule,
  FileUploadModule,
  ToastModule,
  ToolbarModule
];

@NgModule({
  declarations: [
    EmployeeCardComponent,
    AlertComponent,
    HeaderComponent,
    SmartFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeCardComponent,
    AlertComponent,
    HeaderComponent,
    SmartFiltersComponent,
    ...PRIMENG_MODULES
  ]
})
export class SharedModule { }
