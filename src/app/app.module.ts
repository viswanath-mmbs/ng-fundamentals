import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
	EventsListComponent,
	EventsThumnailComponent,
	EventService,
	EventDetailsComponent,
	EventRouteActivator,
	EventListResolver
	} from './events/index';
import { EventsAppComponent } from './evets.app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRouts} from '../routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event-component';
import { Error404Component } from './errors/404.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
	EventsThumnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
	Error404Component,
    NavbarComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRouts)
  ],
  providers: [
	  EventService,
	  EventRouteActivator,
	  ToastrService,
	  EventListResolver,
	  { 
		  provide: 'canDeactivateCreateEvent', 
		  useValue: checkDirtyState
	  }
  ],
  bootstrap: [
	  EventsAppComponent
	]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
	console.log(component)
	if (component.isDirty) {
		return window.confirm("you have not save the contest, do you really want to cancel?");
	} else {
		return true;
	}
}