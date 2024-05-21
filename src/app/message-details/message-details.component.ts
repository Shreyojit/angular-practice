import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {
  @Input() message: any = {};
  @Input() index?: number; // Mark as optional
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    if (this.index !== undefined) {
      this.delete.emit(this.index);
    }
  }
}
