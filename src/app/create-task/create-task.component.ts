import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { AppServices } from '../services/app-services.component';

@Component({
	selector: 'createTask',
	template: 'passed in {{ data.idList }}',
	templateUrl: './create-task.component.html',
	providers: [AppServices]
})


export class CreateTaskComponent implements OnInit {
	task: any;
	
	constructor(private service: AppServices, @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
        this.task = {};
    }

    saveTask(createTaskForm: FormGroup, idList) {
		this.service.saveTask(this.task, idList).subscribe(response => {
			console.log(response);
			createTaskForm.reset()
		});
    }
} 