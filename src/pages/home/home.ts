import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ColorPickerPage } from '../color-picker/color-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goto() {
    this.navCtrl.push(ColorPickerPage);
  }

}
