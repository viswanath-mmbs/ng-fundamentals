import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './evets.app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventsThumnailComponent } from './events/events-thumbnail-component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event-service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	  EventService
  ],
  bootstrap: [
	  EventsAppComponent
	]
})
export class AppModule { }
