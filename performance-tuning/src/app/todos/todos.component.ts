import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    new Todo(1, 'todo description 1', false),
    new Todo(2, 'todo description 2', false),
    new Todo(3, 'todo description 3', false)
  ]

  constructor() {}

  ngOnInit(): void {
  }

  changeText(event: any){
    let text = event.target.value;
    console.log('CHANGE TEXT');
  }

  changeArray() {
    // this.todos[0].text = 'Foo'; // no reference change
    this.todos[0] = {...this.todos[0], text: 'Foo', isCompleted: true};
    console.log('todos:', this.todos);
  }

}
