import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  standalone:false,
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() fullName!: string;
  @Input() department!: string;
  @Input() hireDate!: Date;
  @Input() status!: 'Active' | 'Suspended';
  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<number>();

 
}
