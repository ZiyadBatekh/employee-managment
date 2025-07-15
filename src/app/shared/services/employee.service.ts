import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'Ahmed Ali', department: 'HR', hireDate: '2022-01-15', status: 'active', image: '' },
    { id: 2, name: 'Sara Youssef', department: 'IT', hireDate: '2021-03-10', status: 'suspended', image: '' },
    { id: 3, name: 'Mohamed Hassan', department: 'Finance', hireDate: '2020-07-22', status: 'active', image: '' },
    { id: 4, name: 'Laila Samir', department: 'Marketing', hireDate: '2019-11-05', status: 'active', image: '' },
    { id: 5, name: 'Omar Fathy', department: 'IT', hireDate: '2023-02-01', status: 'suspended', image: '' },
    { id: 6, name: 'Mona Adel', department: 'HR', hireDate: '2022-06-18', status: 'active', image: '' },
    { id: 7, name: 'Khaled Nabil', department: 'Finance', hireDate: '2021-09-30', status: 'active', image: '' },
    { id: 8, name: 'Nourhan Magdy', department: 'Marketing', hireDate: '2020-12-12', status: 'suspended', image: '' },
    { id: 9, name: 'Hossam Tarek', department: 'IT', hireDate: '2019-05-25', status: 'active', image: '' },
    { id: 10, name: 'Dina Mostafa', department: 'HR', hireDate: '2023-04-14', status: 'active', image: '' },
    { id: 11, name: 'Yasser Ehab', department: 'Finance', hireDate: '2022-08-09', status: 'suspended', image: '' },
    { id: 12, name: 'Rania Saad', department: 'Marketing', hireDate: '2021-01-20', status: 'active', image: '' }
  ];

  constructor() { }

  // إرجاع الموظفين بشكل متزامن
  getEmployees(): Observable<Employee[]> {
    return of(this.employees).pipe(delay(300)); // simulate HTTP GET
  }

  // إرجاع الموظفين بشكل غير متزامن (Promise)
  // Deprecated: use getEmployees() instead

  // إضافة موظف جديد
  addEmployee(employee: Employee): Observable<Employee> {
    this.employees.push(employee);
    return of(employee).pipe(delay(200)); // simulate HTTP POST
  }

  // تحديث بيانات موظف
  updateEmployee(updatedEmployee: Employee): Observable<Employee> {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
    return of(updatedEmployee).pipe(delay(200)); // simulate HTTP PATCH
  }

  // حذف موظف
  deleteEmployee(id: number): Observable<number> {
    this.employees = this.employees.filter(emp => emp.id !== id);
    return of(id).pipe(delay(200)); // simulate HTTP DELETE
  }
}
