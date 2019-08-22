import { Component } from '@angular/core';
import { ListTodoServices } from './list-todo.services';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'cardList',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.css'],
	providers: [ListTodoServices]
})


export class ListTodoComponent {
	private lists;
	private connectedTo = [];

	constructor(private listTodo: ListTodoServices) { }

	async ngOnInit() { 
		this.lists = await this.fetchList();
		this.fetchTasks();
	}

	async fetchList() {
		return this.listTodo.getLists().then((listTodo: ListTodoServices[]) => {
			return listTodo
		});
	}

	fetchTasks() {
		this.lists.map(list => {
			this.listTodo.getTasks(list.id).then((listTodo: ListTodoServices[]) => {
				listTodo.length && this.applyTaskInList(listTodo);
			});
		});
	}

	findTaskListById(element) {
		this.lists.map(item => {
			if (item.id === element.listId)
				return item = Object.assign(item, {tasks: [element]});
	
			item = Object.assign(item, {tasks: []});
		});

		this.connectDrag(this.lists);
	}

	applyTaskInList(task) {
		task.forEach(element => {
			this.findTaskListById(element);
		});
	}

	connectDrag(lists) {
		for (let item of lists) {
			this.connectedTo.push(item.id);
		};
	}
	
	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}
}
