import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'canano-browse-cananolab',
  templateUrl: './browse-cananolab.component.html',
  styleUrls: ['./browse-cananolab.component.scss']
})
export class BrowseCananolabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    onSearchProtocolsClick(){
      console.log('MHL BrowseCananolabComponent: onSearchProtocolsClick()');
    }

    onSearchPublicationsClick(){
      console.log('MHL BrowseCananolabComponent: onSearchPublicationsClick()');
    }

    onSearchSamplesClick(){
      console.log('MHL BrowseCananolabComponent: onSearchSamplesClick()');
    }
}
