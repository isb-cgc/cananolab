// ----------------------------------------------------------------------------------------
// ---------------------            "cananolab-client"             ------------------------
// ----------           The top level UI component                                   ------
// ----------               Header                                                   ------
// ----------               Main Top Menu                                            ------
// ----------               Navigation Menu                                          ------
// ----------               Static Left side Menu                                    ------
// ----------------------------------------------------------------------------------------
import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './common/services/configuration.service';
import { Properties } from '../../assets/properties';

@Component({
  selector: 'canano-cananolab-client',
  templateUrl: './cananolab-client.component.html',
  styleUrls: ['./cananolab-client.component.scss']
})
export class CananolabClientComponent implements OnInit {

    properties = Properties;

  constructor(private configurationService: ConfigurationService) {
      // Read and set configuration from assets/configuration file
      console.log('MHL X001 IN CananolabClientComponent Constructor');
      this.configurationService.initConfiguration();

  }

  ngOnInit(): void {
  }

}
