import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Personas } from '../../providers';
import { DataFinder } from '../../providers/datafinder';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
	requesterJSON: any[];

  constructor(public navCtrl: NavController, public personas: Personas, private dataFinder : DataFinder, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.dataFinder.getJSONDataAsync("./assets/data/queryoptions.json").then(data => { this.SetQueryOptionsData(data);
      })
  }

  SetQueryOptionsData(data : any){
    this.requesterJSON = data.requesterJSON;
    }
}