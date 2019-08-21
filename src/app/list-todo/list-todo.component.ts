import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
	selector: 'list-todo',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.css']
})


export class ListTodoComponent {
	cors = 'https://cors-anywhere.herokuapp.com/'
	config;
	lists;
	connectedTo = [];
	headers = { 'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO'};

	constructor(private http: HttpClient) {}

	async ngOnInit() {
		this.config = await this.getAutorization();
		this.mountList();
	}

	async getAutorization() {
		return this.http.post(
			`${this.cors}https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=wellingtong@desafiofluig.com&password=WellingtonGa@123`,
			null,
			{headers: this.headers}
		).toPromise();
	}

	mountList() {
		this.http.get(`${this.cors}https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/tasks/api/v1/lists?page=1&pageSize=1000`,
			{ headers: { 'Authorization':`${this.config.token_type} ${this.config.access_token}`}}
		).subscribe((data: any) => {
			this.lists = data.items;
		 });
	}

	connectDrag() {
		for (let item of this.lists.items) {
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
