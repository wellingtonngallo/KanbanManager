import { Component } from '@angular/core';
import { AppServices } from '../services/app-services.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from "@angular/material";
import { CreateTaskComponent } from "../create-task/create-task.component";

@Component({
	selector: 'cardList',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.css'],
	providers: [AppServices]
})

export class ListTodoComponent {
	private lists;
	private connectedTo = [];

	constructor(
		private listTodo: AppServices,
		private dialog: MatDialog
	) {}

	async ngOnInit() { 
		await this.listTodo.getAutorization();
		this.lists = await this.fetchList();
		this.formattedObjectLists();
		this.fetchTasks();
	}

	async fetchList() {
		return this.listTodo.getLists();
	}

	fetchTasks() {
		this.lists.map(list => {
			this.listTodo.getTasks(list.id).then((listTodo: AppServices[]) => {
				listTodo.length && this.applyTaskInList(listTodo);
			});
		});
	}

	formattedObjectLists() {
		this.lists.map(item => {
			item.tasks = [];
		});
	}

	findTaskListById(element) {
		let addTask = [];

		this.lists.map(item => {
			if (item.id === element.listId) {
				addTask.push(element);
				item = Object.assign(item, {tasks: item.tasks.concat(addTask)});

				return item;
			}	
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
	
	createTask(idList) {
		this.dialog.open(CreateTaskComponent, {
			data: {idList: idList},
			width: '600px'
		});
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