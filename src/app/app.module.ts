import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateListButtonComponent } from './create-list/create-list-button.component';


@NgModule({
	declarations: [
		AppComponent,
		ListTodoComponent,
		CreateTaskComponent,
		CreateListComponent,
		CreateListButtonComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		HttpClientModule,
		DragDropModule,
		MatDialogModule,
		FormsModule
	],
	providers: [],
	entryComponents: [CreateTaskComponent, CreateListComponent, CreateListButtonComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}