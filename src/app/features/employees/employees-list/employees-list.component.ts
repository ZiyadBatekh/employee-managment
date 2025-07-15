import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Employee } from '../../../shared/models/employee.model';
import { EmployeeService } from '../../../shared/services/employee.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesListComponent {
  layout: 'list' | 'grid' = 'list';

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  getSeverity(employee: Employee) {
    switch (employee.status) {
      case 'active':
        return 'success';
      case 'suspended':
        return 'danger';
      default:
        return 'warning';
    }
  }
}
