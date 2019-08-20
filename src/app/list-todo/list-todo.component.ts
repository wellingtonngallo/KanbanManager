import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'list-todo',
	templateUrl: './list-todo.component.html',
	styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent {
	config = {headers: {'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO', 'Access-Control-Allow-Origin': 'http://localhost:4200/'}};

	constructor(private http: HttpClient) {
		this.http.post('https://cors-anywhere.herokuapp.com/https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=wellingtong@desafiofluig.com&password=WellingtonGa@123', null, this.config).toPromise().then(data => {
			
			console.log(data)
		});
	}
}
