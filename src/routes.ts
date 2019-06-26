import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list-component';
import { EventDetailsComponent } from './app/events/event-details/event-details-component';

export const appRouts: Routes = [
	{ path: 'events', component: EventsListComponent },
	{ path: 'events/:id', component: EventDetailsComponent },  // /events/1 or /events/foo
	{ path: '', redirectTo : '/events', pathMatch : 'full' }   // default
]