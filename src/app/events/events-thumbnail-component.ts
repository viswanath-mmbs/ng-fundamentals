import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'event-thumnail',
    template : `    
        <div [routerLink]="['/events', event.id]" class ="well hoverwell thumnail"> 
            <h2>{{event?.name}}</h2>
            <div> Date : {{event?.date}} </div>
            <!-- <div [class.green]="event?.time=== '8:00 am'" [ngSwitch] = "event?.time"> Time : {{event?.time}}  > or -->
            <!-- <div [ngClass]="{green : event?.time=== '8:00 am', bold: event?.time=== '8:00 am'}" [ngSwitch] = "event?.time"> Time : {{event?.time}} > or -->
            <div [ngClass]="getStartTimeClass()" [ngSwitch] = "event?.time"> Time : {{event?.time}} >
            	<span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            	<span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            	<span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div> Price : \$ {{event?.price}} </div>
            <!-- <div *ngIf="event?.location"> -->
            <div [hidden]= "!event?.location">
                <span> Location : {{event?.location?.address}}</span>
                <span> {{event?.location?.city}}, </span>
                <span class="pad-left"> {{event?.location?.country}} </span>
            </div>
            <!-- <div *ngIf="event?.onlineUrl">-->
            <div [hidden]= "!event?.onlineUrl">
            	OnlineUrl : {{event?.onlineUrl}}
            </div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
        </div>
    `,

    styles: [`
    		.green { color: #003300 !important; }
    		.red { color: red !important; }
    		.bold { font-weight: bold; }
            .thumnail { min-height: 210px }
            .pad-left { margin-left : 20px }
        `
    ]
})
export class EventsThumnailComponent {
    @Input() event : any
    @Output() eventClick = new EventEmitter()
    someProperty:any  = "some value"

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    }

    private logFoo() {
        console.log("log foo")
    }
    
    getStartTimeClass() {
    	// const isEarlyTime = this.event && this.event.time === '8:00 am';
		// return { red: isEarlyTime, bold : isEarlyTime };
		if (this.event && this.event.time === '8:00 am')
			return 'red bold'; // ['red', 'bold']
		return  
		// this is same for inline styles as well
    }
    
}