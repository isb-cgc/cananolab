import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api.service';

@Component({
  selector: 'canano-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private piService: ApiService) { }

  ngOnInit(): void {
  }

}
