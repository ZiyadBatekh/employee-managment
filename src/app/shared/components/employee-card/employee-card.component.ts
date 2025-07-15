import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  // imports: [PrimeNG modules, Transloco, ...]
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Input() showActions: boolean = true;

  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<Employee>();

  getStatusSeverity(): 'success' | 'danger' {
    return this.employee.status === 'active' ? 'success' : 'danger';
  }

  onEdit() {
    this.edit.emit(this.employee);
  }

  onDelete() {
    this.delete.emit(this.employee);
  }
}
