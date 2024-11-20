import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email:string= "";
  password:string ="";
  ngOnInit(): void {
  }
  setEmail(event:Event):void{
    this.email = (event.target as HTMLInputElement).value;
  }
  setPassword(event:Event):void{
    this.password = (event.target as HTMLInputElement).value;
  }
}
