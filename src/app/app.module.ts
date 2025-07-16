import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';
import { AddEditEmployeeComponent } from './features/employees/add-edit-employee/add-edit-employee.component';
import { EmployeeCardComponent } from './shared/components/employee-card/employee-card.component';
import { EmployeeService } from './shared/services/employee.service';
import { SmartFiltersComponent } from './shared/components/smart-filters/smart-filters.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEditEmployeeComponent,
    EmployeeCardComponent,
    SmartFiltersComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService , ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { } 