import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  setEmail(event:Event){
    this.email = (event.target as HTMLInputElement).value;
  }
  setPassword(event:Event){
    this.password = (event.target as HTMLInputElement).value;
  }
  setFirstName(event:Event){
    this.firstName = (event.target as HTMLInputElement).value;
  }
  setLastName(event:Event){
    this.lastName = (event.target as HTMLInputElement).value;
  }
}
