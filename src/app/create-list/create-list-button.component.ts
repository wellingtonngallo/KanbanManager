import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from "@angular/material";
import { CreateListComponent } from "./create-list.component";

import { AppServices } from '../services/app-services.component';

@Component({
	selector: 'createButtonList',
	templateUrl: './create-list-button.component.html',
	providers: [AppServices]
})

export class CreateListButtonComponent {
	private createListModal;

	@Output() appendList = new EventEmitter();

    constructor(
		private dialog: MatDialog
	) {}
	
    createList() {
		this.createListModal = this.dialog.open(CreateListComponent, {
			width: '600px'
		});

		this.createListModal.componentInstance.appendList.subscribe(response => {
			this.appendList.emit(response);
		});
	}
} 