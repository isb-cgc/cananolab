import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES, LocalStorageExpiry, IdleExpiry } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Consts } from 'src/app/constants';
import { MatDialog } from "@angular/material/dialog";
import { IdleDialog } from "./cananolab-client/common/components/idle-dialog/idle.dialog.component";

@Component({
  selector: 'canano-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
      { provide: IdleExpiry, useExisting: LocalStorageExpiry }
  ]
})
export class AppComponent implements OnInit {
    title = 'cananolab-client-new';
    idleState = "NOT_STARTED";
    countdown?: number = null;
    lastPing?: Date = null;


    // add parameters for Idle and Keepalive (if using) so Angular will inject them from the module
    constructor(private idle: Idle, keepalive: Keepalive, cd: ChangeDetectorRef, public dialog: MatDialog) {
        idle.setIdleName(Consts.idleStorageKey);
        // set idle parameters
        idle.setIdle(Consts.idleAfter); // how long can they be inactive before considered idle, in seconds
        idle.setTimeout(Consts.logoutAfterIdle); // how long can they be idle before considered timed out, in seconds
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

        // do something when the user becomes idle
        idle.onIdleStart.subscribe(() => {
            this.idleState = "IDLE";
            console.log("Saw user go idle.");
            let now = new Date();
            now.setSeconds(now.getSeconds()+Consts.logoutAfterIdle);
            this.openIdleDialog(now.toTimeString(), Math.floor(Consts.idleAfter/60),Math.floor(Consts.logoutAfterIdle/60));
        });
        // do something when the user is no longer idle
        idle.onIdleEnd.subscribe(() => {
            this.idleState = "NOT_IDLE";
            console.log("Saw user unidle.");
            // close dialog
            this.countdown = null;
            cd.detectChanges(); // how do i avoid this kludge?
        });
        // do something when the user has timed out
        idle.onTimeout.subscribe(() => {
            this.idleState = "TIMED_OUT";
            this.closeIdleDialog();
            console.log("Saw user time out");
        });

        // TODO: If we want to re-rimplement the countdown, do it here
        idle.onTimeoutWarning.subscribe(seconds => {
            this.countdown = seconds;
        });

        // Use the user groups setting for keepalive
        keepalive.interval(Consts.keepAliveInterval);
        keepalive.request(Consts.QUERY_GET_USER_GROUPS);
        keepalive.onPing.subscribe(() => {
            this.lastPing = new Date();
        });
    }

    resetIdler() {
        this.idle.watch();
        this.idleState = "NOT_IDLE";
        this.countdown = null;
        this.lastPing = null;
    }

    ngOnInit(): void {
        this.resetIdler();
    }

    openIdleDialog(expire_time, idle_duration, time_remaining): void {
        const dialogRef = this.dialog.open(IdleDialog, {
            width: '450px',
            data: {expire_time: expire_time, idle_duration: idle_duration, time_remaining: time_remaining}
        });

        dialogRef.afterClosed().subscribe(result => {
            // If something needs to happen when the dialog closes, do it here.
        });
    }

    closeIdleDialog(): void {
        this.dialog.closeAll();
    }
}
