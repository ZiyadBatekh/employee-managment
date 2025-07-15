import { Routes } from '@angular/router';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees-list', pathMatch: 'full',  },
  { path: 'employees-list', component: EmployeesListComponent },
];
