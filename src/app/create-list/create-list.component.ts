import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppServices } from '../services/app-services.component';

@Component({
	selector: 'createList',
	templateUrl: './create-list.component.html',
	providers: [AppServices]
})


export class CreateListComponent implements OnInit {
	list: any;
	
	constructor(private service: AppServices) {}

    ngOnInit() {
        this.list = {};
    }

    saveList(createTaskForm: FormGroup) {
		this.service.saveList(this.list).subscribe(response => {
			console.log(response);
			createTaskForm.reset()
		});
    }
} 