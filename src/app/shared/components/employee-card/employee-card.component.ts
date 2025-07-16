import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ConfirmationService } from 'primeng/api';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  standalone:false,
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() fullName!: string;
  @Input() department!: string;
  @Input() hireDate!: Date;
  @Input() status!: 'Active' | 'Suspended';
  @Input() employee!: Employee;
  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<number>();

  constructor(private confirmationService: ConfirmationService) {}

  @ViewChild(AlertComponent) alert!: AlertComponent;

  confirmDelete(event: Event) {
    this.alert.show(event.target);
  }

  onConfirmedDelete() {
    this.delete.emit(this.employee.id);
  }

  onCancelledDelete() {
    console.log('Delete cancelled');
  }
  
}
