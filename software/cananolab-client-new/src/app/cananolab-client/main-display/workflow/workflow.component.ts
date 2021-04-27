import { Component, OnInit } from '@angular/core';
import { TopMenuItems } from '../../top-main-menu/top-main-menu.service';

@Component({
  selector: 'canano-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
    // For HTML access
    topMenuItems =  TopMenuItems;

  constructor() { }

  ngOnInit(): void {
  }
 onAreaClick( selection ){
      console.log('MHL onAreaClick selection: ',selection );
    alert( 'Place holder for ' + selection)
 }
}
