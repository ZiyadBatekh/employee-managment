import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { EmployeeService } from './shared/services/employee.service';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EmployeesModule } from './features/employees/employees.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  SharedModule,
  EmployeesModule,
  RouterModule.forRoot(routes)
    
  ],
  providers: [EmployeeService , ConfirmationService,  DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { } 