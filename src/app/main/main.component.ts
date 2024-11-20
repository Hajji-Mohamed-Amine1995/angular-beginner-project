import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DataType, environment, Todo} from '../../../utils/type';
import fetchData from '../../../utils/fetchData';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgForOf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  todos:Todo[] = [];
  isLoading:boolean = false;
  isShown:boolean = false;
  selectedTodo:Todo|null = null;
  setIsLoading(isLoading:boolean){
    this.isLoading = isLoading;
  }
  async fetchData() {
    const response = await fetchData(environment.REQUEST_URL,"GET",DataType.TODOS);
    if(response){
      this.todos = response;
      console.log(this.todos)
    }
  }
  async ngOnInit() {
    await this.fetchData();
  }
  setTodo(id:number|null){
    const foundTodo =this.todos.find(item=>item.id === id);
    if(foundTodo){
      console.log(foundTodo)
      this.selectedTodo = foundTodo;
      this.isShown = true;
    }
  }
  closeModal(event:MouseEvent){
    event.stopPropagation();
    this.selectedTodo = null;
    this.isShown = false;
  }
}
