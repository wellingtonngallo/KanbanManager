import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
	declarations: [
		AppComponent,
		ListTodoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: '', component: ListTodoComponent },
		  ])
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }