import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Todo, TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  todos: Todo[] = []

  loading = false

  todoTitle = ''

  error = ''

  constructor(private cd: ChangeDetectorRef, private todoService: TodoService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true
    this.todoService.fetchTodos()
      .subscribe((res) => {
        this.todos = res
        this.loading = false
        this.cd.markForCheck()
      }, error => {
        this.error = error.message;
        console.log(error.message)
        this.cd.markForCheck()
      })
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    })
      .subscribe(todo => {
        this.todos.push(todo)
        this.todoTitle = ''
        this.cd.markForCheck()
      })


  }

  removeTodo(id: number | undefined) {
    this.todoService.deleteTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.cd.markForCheck()
      })
  }

  completeTodo(id: number | undefined) {
    this.todoService.completeTodo(id)
      .subscribe((todo) => {
        this.todos.find(todo => todo.id === id)!.completed = true
        this.cd.markForCheck()
      })
  }

}
