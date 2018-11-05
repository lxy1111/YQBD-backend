import {Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { mockTasks } from '../../mockData/mockTasks';
import { FormBuilder } from '@angular/forms';
import { mockTypes } from '../../mockData/mockTypes';

@Component({
  templateUrl: 'TaskDetail.html',
  styles: ['./chat.scss']
})

export class TaskDetailPage {

//@ViewChild(Content) content: Content;
task;
types = mockTypes;
constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public formBuilder: FormBuilder) {
                this.task=navParams.data.task;
            }

}

@Component({
  template: `<ion-header>

  <ion-navbar>
    <ion-title>任务</ion-title>
  </ion-navbar>

</ion-header>

<ion-content padding>
    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>
    <ion-list>
      <ion-item *ngFor="let item of items">
        {{ item }}
      </ion-item>
    </ion-list>
  <ion-list>
    <!-- <ion-list-header>Today</ion-list-header> -->
    <!-- 点击的时候跳转界面 -->
    <ion-item *ngFor="let task of tasks" (click)="openTaskDetailPage(task)">
      <ion-thumbnail item-start>
        <img [src]="task.imageUrl">
      </ion-thumbnail>
      <h2>{{task.title}}</h2>
      <p>{{task.location}}</p>
      <p>{{task.ddl}}</p>
      <ion-note>{{task.pay}}</ion-note>
      <h3 item-end>{{task.state}}</h3>
    </ion-item>

  </ion-list>

</ion-content>`,
   styles: ['./chat.scss']
})
export class ChatPage {
  tasks = [];
  types = mockTypes;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public nav: NavController) {
                this.tasks = mockTasks;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  openTaskDetailPage(task) {
    this.nav.push(TaskDetailPage, { task: task });
  }

}
