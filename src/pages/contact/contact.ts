import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { mockTasks } from '../../mockData/mockTasks';
import { TaskDetailPage } from '../chat/chat';
@Component({ 
  selector: 'page-contact',
  templateUrl: 'Contact.html',
  styles: ['./contact.scss'],
})
export class ContactPage {
  public myTask = mockTasks;
  public AboutMe : string = '我的信息';
  public myInfos;
  public params;

  constructor(public navCtrl: NavController,
              public navparams:NavParams) {
    this.params=navparams;
    console.log(this.params);
    console.log(this.params.get('user_id'));
    console.log(typeof(this.params));
    this.myInfos = {
      "imageUrl": 'assets/imgs/1.jpg',
      "age":this.params.get('age'),
      "phone":this.params.get('phone'),
      "name":this.params.get('realname'),
      "gender": this.params.get('gender'),
      "job": this.params.get('job'),
      "star":this.params.get('star'),
      "title":this.params.get('title'),
      "address":this.params.get('user_address')
    }
   // console.log(this.myInfo);
      // this.myInfo=params;
    //   console.log(this.myInfo);
  }


  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  itemTapped(event, item){
      this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  openTaskDetailPage(task) {
    this.navCtrl.push(TaskDetailPage, { task: task });
  }

}

