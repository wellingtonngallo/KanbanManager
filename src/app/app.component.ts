import { Component, ViewChild } from '@angular/core';
import { ListTodoComponent } from "./list-todo/list-todo.component";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	@ViewChild(ListTodoComponent, {static: false}) child!: ListTodoComponent;

	renderList(event) {
		this.child.addList(event);
	}
}