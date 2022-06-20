import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent
  // implements
    // OnChanges,
    // OnInit,
    // DoCheck,
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy
  {

  @Input('todo') todo: Todo = {id: 1, text: 'description', isCompleted: false};

  filter$: Observable<string>;

  testData = 123;

  constructor(private todosService: TodosService) {
    this.filter$ = this.todosService.filter$;
   }

  // ngOnChanges() {
  //   console.log('Trace OnChanges');
  // }

  // ngOnInit() {
  //   console.log('Trace onInit');
  // }

  // ngDoCheck() {
  //   console.log('Trace doCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('Trace After Content Init');
  // }

  // ngAfterContentChecked() {
  //   console.log('Trace after content checked');
  // }

  // ngAfterViewInit() {
  //   console.log('Trace after view init');
  // }

  // ngAfterViewChecked() {
  //   console.log('Trace after view checked');
  // }

  // ngOnDestroy() {
  //   console.log('Trace on destroy');
  // }

  checkRender() {
    console.log('CHECK RENDER');
    return true;
  }

  changeText() {
    this.todo.text = 'Changed from inside!';
  }

  changeFilter() {
    this.todosService.filter$.next('active');
  }
}
