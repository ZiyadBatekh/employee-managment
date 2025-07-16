import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-alert',
  standalone: false,
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() message: string = 'Are you sure?';
  @Input() icon: string = 'pi pi-exclamation-triangle';
  @Input() acceptLabel: string = 'Yes';
  @Input() rejectLabel: string = 'No';
  @Input() severity: 'info' | 'warn' | 'danger' | 'success' = 'warn';
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  constructor(private confirmationService: ConfirmationService) {}
  
  // using primeNG for showing a confirmation popup
  show(target?: EventTarget | null) {
    this.confirmationService.confirm({
      target: target ?? undefined,
      message: this.message,
      icon: this.icon,
      acceptLabel: this.acceptLabel,
      rejectLabel: this.rejectLabel,
      acceptButtonStyleClass: `p-button-${this.severity}`,
      rejectButtonStyleClass: 'p-button-secondary p-button-outlined',
      accept: () => this.confirmed.emit(),
      reject: () => this.cancelled.emit()
    });
  }
}
