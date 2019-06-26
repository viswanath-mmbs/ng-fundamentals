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

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
	EventsThumnailComponent,
	EventDetailsComponent,
	CreateEventComponent,
    NavbarComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRouts)
  ],
  providers: [
	  EventService,
	  ToastrService
  ],
  bootstrap: [
	  EventsAppComponent
	]
})
export class AppModule { }
