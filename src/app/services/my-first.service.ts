import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() { 
    this.init();
  }

  init() : void {
    this.insert({
      name: 'John',
      email: 'email',
      message:'message'
    });

    this.insert({
      name: 'jamie',
      email: 'email2',
      message:'message2'
    });
    this.insert({
      name: 'Johnnny',
      email: 'email3',
      message:'message3'
    })



  }


  insert(message : {name: string, email:string, message: string}): void {

    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  delteMessages(index: number): void {
    this.messages.splice(index, 1);

}
}