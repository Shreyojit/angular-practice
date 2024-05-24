import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: { name: string; email: string; message: string }[] = [];
  private service : MyFirstService = inject(MyFirstService);

  constructor(
   
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length>0;

  }


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
