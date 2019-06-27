import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './evets.app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventsThumnailComponent } from './events/events-thumbnail-component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { appRouts} from '../routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event-component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-router-activator-service';
import { EventListResolver } from './events/events-list-resolver-service';

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