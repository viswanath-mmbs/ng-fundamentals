import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list-component';
import { EventDetailsComponent } from './app/events/event-details/event-details-component';
import { CreateEventComponent } from './app/events/create-event-component';
import { Error404Component } from './app/errors/404.component';
import { EventRouteActivator } from './app/events/event-details/event-router-activator-service';
import { EventListResolver } from './app/events/events-list-resolver-service';
import { JsonPipe } from '@angular/common';

export const appRouts: Routes = [
	{ path: 'events/new', component: CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent'] },  //using method instead of service
	{ path: 'events', component: EventsListComponent, resolve: {events: EventListResolver } },
	{ path: 'events/:id', component: EventDetailsComponent, canActivate: [ EventRouteActivator ] },  // /events/1 or /events/foo
	{ path: '404', component: Error404Component },  // /events/1 or /events/foo
	{ path: '', redirectTo : '/events', pathMatch : 'full' },   // default
	{ path: 'user', loadChildren: './app/user/user.module#UserModule'}
]


