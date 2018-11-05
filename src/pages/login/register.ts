import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: ['./register.scss'],
})
export class RegisterPage {


  constructor(public navCtrl: NavController) {

  }

  enterHome(){
    this.navCtrl.push(TabsPage);
  }

}
