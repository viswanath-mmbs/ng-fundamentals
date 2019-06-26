import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event-service';
import { ToastrService } from '../common/toastr.service';

declare let toastr
@Component({
    selector : 'events-list',
    template : `
        <div>
            <h1> upcoming anngular events</h1>
            <hr/>
            <div class="well"><div>Hello World</div></div>
            <div class = "row">
                <div  *ngFor = "let event of events" class = "col-md-6">
                    <event-thumnail #thumbnail (click)="handleThumnailClickEvent(event.name)" (eventClick) = "handleEventClicked($event)" [event] = "event"> </event-thumnail>
					<h3>{{thumbnail.someProperty}}</h3>
					<!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo!</button> -->
                </div>
            </div>
            
            
        </div>
    `,
    styles: [`
    .well div { color : red}
`
]
})
export class EventsListComponent implements OnInit {
	// passing data from parent to child
	events:any[]
	constructor(private eventService : EventService, private toastr :  ToastrService) {
		// this.events= eventService.getEvents(); // its not recomended to load data from webservice in constructor, it is good to be in onInit()
	}
	
	ngOnInit() {
		this.events= this.eventService.getEvents();
	}
    handleEventClicked(data) {
        console.log("data from child component" + data)
	}
	
	handleThumnailClickEvent(eventName) {
		this.toastr.success(eventName)
	}
}