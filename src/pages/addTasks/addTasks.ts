import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-addTasks',
  templateUrl: 'addTasks.html',
  styles: ['./addTasks.scss'],
})
export class AddTaskPage {


  constructor(public navCtrl: NavController) {

  }
  addTask(missionname,missionaddress,missiondeadline,category,maxnumber,description){
      var mission={
          "missionname":missionname,
          "missionaddress":missionaddress,
          "missiondeadline":missiondeadline,
          "category":category,
          "maxnumber":maxnumber,
          "description":description
      }





    //this.navCtrl.push(TabsPage);
  }

}
