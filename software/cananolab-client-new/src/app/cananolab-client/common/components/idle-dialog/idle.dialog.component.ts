import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'idle-dialog',
    templateUrl: 'idle.dialog.html',
    styleUrls: ['./idle.dialog.scss']
})
export class IdleDialog implements OnInit {
    @Input() expire_time: string;
    @Input() idle_duration: string;
    @Input() time_remaining: string;

    constructor(public activeModal: NgbActiveModal) { }

    setData(expire_time, idle_duration, time_remaining): void {
        this.expire_time = expire_time;
        this.idle_duration = idle_duration;
        this.time_remaining = time_remaining;
    }

    updateTimeRemaining(timeLeft): void {
        this.time_remaining = timeLeft;
    }

    ngOnInit(): void {
        //
    }
}

