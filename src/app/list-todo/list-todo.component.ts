import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'list-todo',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.css']
})


export class ListTodoComponent {
	public config;
	public lists;
	public connectedTo = [];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.mountList();
	}

	getAutorization() {
		this.http.post(
			'https://cors-anywhere.herokuapp.com/https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=wellingtong@desafiofluig.com&password=WellingtonGa@123',
			null,
			{headers: { 'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO'}}
		).toPromise().then(data => {
			this.config = data;
		});
	}

	mountList() {
		this.http.get('https://cors-anywhere.herokuapp.com/https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/tasks/api/v1/lists?page=1&pageSize=1000',
			{ headers: { 'Authorization':'bearer eyJraWQiOiJhY2NvdW50cy1rZGkiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiN2ZiZjYxZTdjMDU2MTFlOWEyZjQwYTU4NjQ2MDNmM2IiLCJ0ZW5hbnRJZHBJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwibGFzdFVwZGF0ZURhdGUiOjE1NjYyNTkyMDAwMDAsInVzZXJfbmFtZSI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJmdWxsTmFtZSI6IldlbGxpbmd0b24gR2FsbG8gRGVzYWZpbyIsInRlbmFudENvZGUiOiJkZXNhZmlvZnJvbnQiLCJ1c2VySWQiOjQ2NDQsImF1dGhvcml0aWVzIjpbInVzZXIiXSwiY2xpZW50X2lkIjoiZGVtbyIsInVzZXJUaW1lWm9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiYXVkIjoiZmx1aWdfYXV0aGVudGljYXRvcl9yZXNvdXJjZSIsImNvbXBhbnlJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwic2NvcGUiOlsiKiJdLCJ0ZW5hbnRJZCI6NjU0MTM4OTU5LCJ1c2VySWRwSWQiOiI4MmRiZTE0ZmMyYzMxMWU5YTJmNDBhNTg2NDYwM2YzYiIsInVzZXJVVUlEIjoiMzNhYTFjYjQtYjU4Ny00OWUxLWFhNDctZTExNzI4NjZjY2U0IiwiZXhwIjoxNTY2NTA4NTEwLCJlbWFpbCI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJhcHBzIjpbImFjY291bnRzIiwidGFza3MiXSwic3ViIjoid2VsbGluZ3RvbmdAZGVzYWZpb2ZsdWlnLmNvbSIsImlhdCI6MTU2NjMzNTcxMCwiaXNzIjoiKi5mbHVpZy5pbyJ9.Xl3vBGHpACLyBvqpGE0UnIsACUL7WZ6XqK8jHAAkPBevRyeu4uZgzSXbOimsU3HlWXSIqTr40cMHcX-Qil39XmI_6M9eYAfV6ylDwUadWVkiTG0YtSSvcrTia3asWmAkTmBc-m3tq6Mu26D7I5I_U5rvmuC4b0YOYtTdvMCUA0UVEPLAWW6L_QQV1Gcp9bYOszlbOdZqBYmtFFuoSBv-pQIi_ZgExQBl1RWgewVweYy7VeLYxQ8fA7V41CzGERC8LXyk-NJvBLVc5suYGIS7XzNSt7lnrafoQEWU3Q6SElHJDqDiZfd2P2ptkWzxlG6GIoixrrVj-aUuyXOYLY-1kg'}}
		).subscribe(response => {
			this.lists = response.items
		});
	}

	setTeste() {
		for (let list of this.lists) {
			this.connectedTo.push(list.id);
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
