import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from "@angular/material";
import { CreateListComponent } from "./create-list.component";

import { AppServices } from '../services/app-services.component';

@Component({
	selector: 'createButtonList',
	templateUrl: './create-list-button.component.html',
	providers: [AppServices]
})

export class CreateListButtonComponent {
    constructor(
		private dialog: MatDialog
    ) {}
    
    createList() {
        this.dialog.open(CreateListComponent, {
			width: '600px'
		});
    }   
} 