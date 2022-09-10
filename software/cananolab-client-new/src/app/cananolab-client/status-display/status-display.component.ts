import { Component, OnInit } from '@angular/core';
import { StatusDisplayService } from './status-display.service';
import { timeoutWith } from 'rxjs/operators';
import { Properties } from '../../../assets/properties';
import { TopMainMenuService } from '../top-main-menu/top-main-menu.service';
import { throwError } from "rxjs";


@Component({
  selector: 'canano-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.scss']
})
export class StatusDisplayComponent implements OnInit {
  userName;
  groups;
  properties=Properties;
  constructor(private topMainMenuService:TopMainMenuService,private statusDisplayService: StatusDisplayService) { }

  ngOnInit(): void {
    this.statusDisplayService.updateUserEmitter.subscribe(
    data => {
        console.log("Saw username of:");
        console.log(data);
        this.userName = data;
    });
    this.statusDisplayService.updateGroupEmitter.subscribe(data=> {
        console.log("Saw groups of:");
        console.log(data);
        let keys=Object.keys(data);
        keys.forEach(key=> {
            this.properties['GROUPS']=data[key];
            this.groups=data[key].join('<br />')
        });
    });
  }
}
