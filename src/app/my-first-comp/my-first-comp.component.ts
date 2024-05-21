import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  messages: { name: string; email: string; message: string }[] = [];

  onSubmit() {
    if (this.name && this.email && this.message) {
      this.messages.push({
        name: this.name,
        email: this.email,
        message: this.message
      });
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
