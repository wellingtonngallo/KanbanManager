import { HttpClient } from '@angular/common/http';

export class AppServices {
    private autorizationUrl = 'https://accounts.homolog.fluig.io/accounts/oauth/token?grant_type=password&response_type=token&client_id=demo&username=wellingtong@desafiofluig.com&password=WellingtonGa@123';
    private url = 'https://tasks-homolog.k8s-platform-dev-us-east-1.fluig.io/tasks/api/v1/lists/';
    private cors = 'https://cors-anywhere.herokuapp.com/';
    private headers = {'Authorization': 'Basic ZGVtbzpzU2R4T1lEQU0zRkJO'};

    constructor(private http:HttpClient) {}
    
    public getAutorization(): Promise<void | []> {
        return this.http.post(`${this.cors}${this.autorizationUrl}`, null, {headers: this.headers})
        .toPromise()
        .then(token => {
            localStorage.setItem("config", JSON.stringify(token));
        });
    }

    public getLists(): Promise<any[]> {
        let config = JSON.parse(localStorage.getItem('config'));

        return this.http.get(`${this.cors}${this.url}`,
            {headers: {'Authorization': `${config.token_type} ${config.access_token}`}})
            .toPromise()
            .then((response:any) => {
                return response.items;
            })
    }

    public getTasks(idList): Promise<any[]> {
        let config = JSON.parse(localStorage.getItem('config'));

        return this.http.get(`${this.cors}${this.url}/${idList}/tasks`,
            {headers: {'Authorization': `${config.token_type} ${config.access_token}`}})
            .toPromise()
            .then((response:any) => {
                return response.items;
            });
    }

    public saveTask(task:any, idList) {
        let config = JSON.parse(localStorage.getItem('config')),
            data =  JSON.stringify(task);

        return this.http.post(`${this.cors}${this.url}${idList}/tasks`, data,
            {headers: {
                'Authorization': `${config.token_type} ${config.access_token}`,
                'Content-Type': 'application/json'
            }});
    }

    public saveList(list:any) {
        let config = JSON.parse(localStorage.getItem('config')),
            data =  JSON.stringify(list);
        
        return this.http.post(`${this.cors}${this.url}`, data,
            {headers: {
                'Authorization': `${config.token_type} ${config.access_token}`,
                'Content-Type': 'application/json'
            }});
    }
}