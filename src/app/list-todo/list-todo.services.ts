import { HttpClient } from '@angular/common/http';

export class ListTodoServices {
    private url = 'https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/tasks/api/v1/lists';
    private cors = 'https://cors-anywhere.herokuapp.com/';
    private config;
    private headers = { 'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO'};

    constructor(private http: HttpClient) {
         this.getAutorization();
    }

	public getAutorization(): Promise<void | []> {
		return this.http.post(
			`${this.cors}https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=wellingtong@desafiofluig.com&password=WellingtonGa@123`,
			null,
			{headers: this.headers}
        ).toPromise()
        .then(tokenAutentication => {
            this.config = tokenAutentication;
        });
	}

    public getLists(): Promise<any[]> {
        return this.http.get(`${this.cors}${this.url}`,{headers: { 'Authorization': 'bearer eyJraWQiOiJhY2NvdW50cy1rZGkiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiN2ZiZjYxZTdjMDU2MTFlOWEyZjQwYTU4NjQ2MDNmM2IiLCJ0ZW5hbnRJZHBJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwibGFzdFVwZGF0ZURhdGUiOjE1NjY2MDQ4MDAwMDAsInVzZXJfbmFtZSI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJmdWxsTmFtZSI6IldlbGxpbmd0b24gR2FsbG8gRGVzYWZpbyIsInRlbmFudENvZGUiOiJkZXNhZmlvZnJvbnQiLCJ1c2VySWQiOjQ2NDQsImF1dGhvcml0aWVzIjpbInVzZXIiXSwiY2xpZW50X2lkIjoiZGVtbyIsInVzZXJUaW1lWm9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiYXVkIjoiZmx1aWdfYXV0aGVudGljYXRvcl9yZXNvdXJjZSIsImNvbXBhbnlJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwic2NvcGUiOlsiKiJdLCJ0ZW5hbnRJZCI6NjU0MTM4OTU5LCJ1c2VySWRwSWQiOiI4MmRiZTE0ZmMyYzMxMWU5YTJmNDBhNTg2NDYwM2YzYiIsInVzZXJVVUlEIjoiMzNhYTFjYjQtYjU4Ny00OWUxLWFhNDctZTExNzI4NjZjY2U0IiwiZXhwIjoxNTY2ODM5MTYzLCJlbWFpbCI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJhcHBzIjpbImFjY291bnRzIiwidGFza3MiXSwic3ViIjoid2VsbGluZ3RvbmdAZGVzYWZpb2ZsdWlnLmNvbSIsImlhdCI6MTU2NjY2NjM2MywiaXNzIjoiKi5mbHVpZy5pbyJ9.cBwExrtjMONuCyj2QD9eZmqorl_-uilGoTr_1jW-kiQwnkGwgIdMuQ1PjbqNUWvizbmYIHk6HG_RFLVWVkEg1T540CMqv-vkEPwTgUxf6HvBFLW0vJnwP0bg3xCVfW6GQ7sb4cMqoqUhFasZ_AZ_YFkGrioAqCWZmPb7twKgHh2_yS6d5CcDe7TpHSh1Sim2RbBjovMvSU5XyuHZlDCFpZnCmosxtRy0uUTYPSEe4eo8Qq_a8NYUwibu3XPdHhZyBKLc72YXrIznZ57J77qBGpedssC9xirccXWeWZCdCxsZPsFG-rN8rVntDUMgGhjXbxgUIWcmFIPQKoe5PRqjWQ'}})
            .toPromise()
            .then((response:any) => {
                return response.items;
            })
    }

    public getTasks(idList): Promise<any[]> {
        return this.http.get(`${this.cors}${this.url}/${idList}/tasks`,{headers: { 'Authorization':`bearer eyJraWQiOiJhY2NvdW50cy1rZGkiLCJhbGciOiJSUzI1NiJ9.eyJ0ZW5hbnRVVUlEIjoiN2ZiZjYxZTdjMDU2MTFlOWEyZjQwYTU4NjQ2MDNmM2IiLCJ0ZW5hbnRJZHBJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwibGFzdFVwZGF0ZURhdGUiOjE1NjY2MDQ4MDAwMDAsInVzZXJfbmFtZSI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJmdWxsTmFtZSI6IldlbGxpbmd0b24gR2FsbG8gRGVzYWZpbyIsInRlbmFudENvZGUiOiJkZXNhZmlvZnJvbnQiLCJ1c2VySWQiOjQ2NDQsImF1dGhvcml0aWVzIjpbInVzZXIiXSwiY2xpZW50X2lkIjoiZGVtbyIsInVzZXJUaW1lWm9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiYXVkIjoiZmx1aWdfYXV0aGVudGljYXRvcl9yZXNvdXJjZSIsImNvbXBhbnlJZCI6IjdmYmY2MWU3YzA1NjExZTlhMmY0MGE1ODY0NjAzZjNiIiwic2NvcGUiOlsiKiJdLCJ0ZW5hbnRJZCI6NjU0MTM4OTU5LCJ1c2VySWRwSWQiOiI4MmRiZTE0ZmMyYzMxMWU5YTJmNDBhNTg2NDYwM2YzYiIsInVzZXJVVUlEIjoiMzNhYTFjYjQtYjU4Ny00OWUxLWFhNDctZTExNzI4NjZjY2U0IiwiZXhwIjoxNTY2ODM5MTYzLCJlbWFpbCI6IndlbGxpbmd0b25nQGRlc2FmaW9mbHVpZy5jb20iLCJhcHBzIjpbImFjY291bnRzIiwidGFza3MiXSwic3ViIjoid2VsbGluZ3RvbmdAZGVzYWZpb2ZsdWlnLmNvbSIsImlhdCI6MTU2NjY2NjM2MywiaXNzIjoiKi5mbHVpZy5pbyJ9.cBwExrtjMONuCyj2QD9eZmqorl_-uilGoTr_1jW-kiQwnkGwgIdMuQ1PjbqNUWvizbmYIHk6HG_RFLVWVkEg1T540CMqv-vkEPwTgUxf6HvBFLW0vJnwP0bg3xCVfW6GQ7sb4cMqoqUhFasZ_AZ_YFkGrioAqCWZmPb7twKgHh2_yS6d5CcDe7TpHSh1Sim2RbBjovMvSU5XyuHZlDCFpZnCmosxtRy0uUTYPSEe4eo8Qq_a8NYUwibu3XPdHhZyBKLc72YXrIznZ57J77qBGpedssC9xirccXWeWZCdCxsZPsFG-rN8rVntDUMgGhjXbxgUIWcmFIPQKoe5PRqjWQ`}})
            .toPromise()
            .then((response:any) => {
                return response.items;
            });
    }
}