import { ChangeDetectorRef, Component, OnInit, ViewContainerRef, ComponentFactoryResolver  } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES, LocalStorageExpiry, IdleExpiry } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Consts } from 'src/app/constants';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap"
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
    idleDialogOpen = false;
    idleDialogRef = null;
    countdown?: number = null;
    lastPing?: Date = null;
    cd = null;

    // add parameters for Idle and Keepalive (if using) so Angular will inject them from the module
    constructor(private idle: Idle, keepalive: Keepalive, cd: ChangeDetectorRef,
                private vcref: ViewContainerRef, private cfr: ComponentFactoryResolver,
                private modalService: NgbModal) {

        this.cd = cd;
        idle.setIdle(Consts.idleAfter);
        idle.setTimeout(Consts.logoutAfterIdle);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onIdleStart.subscribe(() => {
            this.idleState = "IDLE";
            console.log("Saw user go idle.");
            let now = new Date();
            now.setSeconds(now.getSeconds()+Consts.logoutAfterIdle);
            if(!this.idleDialogOpen && !this.idleDialogRef) {
                this.openIdleDialog(now.toTimeString(), Math.floor(Consts.idleAfter/60),Math.floor(Consts.logoutAfterIdle/60));
            }
        });

        idle.onIdleEnd.subscribe(() => {
            this.idleState = "NOT_IDLE";
            console.log("Saw user unidle.");
            this.closeIdleDialog();
            this.countdown = null;
        });
        // do something when the user has timed out
        idle.onTimeout.subscribe(() => {
            this.idleState = "TIMED_OUT";
            this.closeIdleDialog();
            console.log("Saw user time out");
            this.vcref.clear();
            import('./cananolab-client/main-display/logout/logout.component').then(
                ({LogoutComponent}) => {
                this.vcref.createComponent(
                    this.cfr.resolveComponentFactory(LogoutComponent)
                );
            });
        });

        idle.onTimeoutWarning.subscribe(seconds => {
            let minutesLeft = Math.floor(seconds/60);
            let secondsLeft = seconds-(minutesLeft*60);
            let timeLeft = ((minutesLeft <= 0) ? "00:" :
                (minutesLeft > 10 ? minutesLeft.toString() : "0"+minutesLeft.toString()))
                + (secondsLeft < 10 ? "0"+secondsLeft.toString() : secondsLeft.toString());
            this.idleDialogRef.componentInstance.updateTimeRemaining(timeLeft);
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
        this.closeIdleDialog();
    }

    ngOnInit(): void {
        this.resetIdler();
    }

    openIdleDialog(expire_time, idle_duration, time_remaining): void {
        this.idleDialogRef = this.modalService.open(IdleDialog);
        this.idleDialogRef.componentInstance.setData(expire_time, idle_duration, time_remaining);
        this.idleDialogOpen = true;
    }

    closeIdleDialog(): void {
        this.idleDialogRef && this.idleDialogRef.close();
        this.idleDialogRef = null;
        this.idleDialogOpen = false;
    }
}
