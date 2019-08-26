import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppServices } from '../services/app-services.component';

@Component({
	selector: 'createList',
	templateUrl: './create-list.component.html',
	providers: [AppServices]
})

export class CreateListComponent {
	@Output() appendList = new EventEmitter();

	list: any;
	
	constructor(private service: AppServices) {}

    ngOnInit() {
        this.list = {};
    }

    saveList(createTaskForm: FormGroup) {
		this.service.saveList(this.list).subscribe(response => {
			this.appendList.emit(response);
			createTaskForm.reset()
		});
	}
} 