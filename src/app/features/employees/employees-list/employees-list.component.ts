import { Component } from '@angular/core';
import { Employee } from '../../../shared/models/employee.model';
import { EmployeeService } from '../../../shared/services/employee.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  isLoading = true;

  constructor(private employeeService: EmployeeService , private dialogService: DialogService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  //popup for opening add new employee form
  openAddEmployee() {
    const ref = this.dialogService.open(AddEditEmployeeComponent, {
      header: 'Add New Employee',
      width: '500px'
    });
  
    ref.onClose.subscribe((employee) => {
      if (employee) {
        this.employeeService.addEmployee(employee).subscribe(() => this.fetchEmployees());
      }
    });
  }

  //popup for editing an existing employee
  openEditEmployee(employee: Employee) {
    const ref = this.dialogService.open(AddEditEmployeeComponent, {
      data: { employee },
      header: 'Edit Employee',
      width: '500px'
    });
  
    ref.onClose.subscribe((updatedEmployee) => {
      if (updatedEmployee) {
        this.employeeService.updateEmployee(updatedEmployee).subscribe(() => this.fetchEmployees());
      }
    });
  }

  // GET employes from the service (simulating fetching the data from GET api that should exist in the service)
  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
      this.isLoading = false;
    });
  }

  // Applying filteration 
  applyFilter(filter: { search: string; status: string }) {
    this.filteredEmployees = this.employees.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(filter.search)
        || employee.department.toLowerCase().includes(filter.search)
        || employee.hireDate.includes(filter.search)
        || employee.status.toLowerCase().includes(filter.search);
      const matchesStatus = filter.status === 'all'
        || employee.status === filter.status;
      return matchesSearch && matchesStatus;
    });
  }

  // deleting an employee
  onDelete(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(emp => emp.id !== id);
      this.filteredEmployees = this.filteredEmployees.filter(emp => emp.id !== id);
    });
  }
}
