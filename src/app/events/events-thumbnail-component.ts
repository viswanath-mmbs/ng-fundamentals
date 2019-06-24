import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector : 'event-thumnail',
    template : `    
        <div class="well hoverwell thumnail"> 
            <h2>{{event?.name}}</h2>
            <div> Date : {{event?.date}} </div>
            <div> Time : {{event?.time}} </div>
            <div> Price : \$ {{event?.price}} </div>
            <div *ngIf="event?.location">
                <span> Location : {{event?.location?.address}}</span>
                <span> {{event?.location?.city}}, </span>
                <span class="pad-left"> {{event?.location?.country}} </span>
            </div>
            <div *ngIf="event?.onlineUrl">OnlineUrl : {{event?.onlineUrl}}</div>
            <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
        </div>
    `,

    styles: [`
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
}