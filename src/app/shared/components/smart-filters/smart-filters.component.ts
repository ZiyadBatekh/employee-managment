import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-smart-filters',
  standalone: false,
  templateUrl: './smart-filters.component.html',
  styleUrl: './smart-filters.component.scss'
})
export class SmartFiltersComponent {
  @Input() searchPlaceholder: string = 'Search...';
  @Input() statusOptions: { label: string; value: string }[] = [];
  searchTerm = '';
  selectedStatus = 'all';
  @Output() filterChanged = new EventEmitter<{ search: string; status: string }>();

  onSearchChange() {
    this.emitFilter();
  }

  onStatusChange(event: any) {
    this.selectedStatus = event.target.value;
    this.emitFilter();
  }

  private emitFilter() {
    this.filterChanged.emit({
      search: this.searchTerm.toLowerCase(),
      status: this.selectedStatus
    });
  }
}
