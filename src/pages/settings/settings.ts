import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Persona } from '../../models/persona';
import { Personas } from '../../providers';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	requesterJSON: any[];
	pmethods: any[];
	paypalemail: any[];
  config: string = "Profile";

  constructor(public navCtrl: NavController, private dataFinder : DataFinder, public personas: Personas, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
  	this.requesterJSON = data.requesterJSON;
  	this.pmethods = data.pmethods;
  	this.paypalemail = data.paypalemail;

  }

  OpenHistory(){
    this.navCtrl.push('HomePage');
  }

  OpenCancel(){
    this.navCtrl.push('HomePage');
  }

  OpenAnnouncements(){
    this.navCtrl.push('AnnouncementsPage');
  }
}
