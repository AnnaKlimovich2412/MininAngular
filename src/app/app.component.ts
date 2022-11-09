import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {tap} from "rxjs";
import {Todo, TodoService} from "./todo.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(public auth: AuthService) {}

}
