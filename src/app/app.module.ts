import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {  ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TaskDetailPage } from '../pages/chat/chat';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { taskTypePage } from '../pages/home/home'
import { AddTaskPage } from '../pages/addTasks/addTasks'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PipesModule } from '../pipes/pipes.module';
import { GetMessageService } from '../providers/getMessageService';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/login/register';
import { userService } from '../providers/userService';

@NgModule({
  declarations: [
    MyApp,
     ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage,
    TaskDetailPage,
    LoginPage,
    taskTypePage,
    RegisterPage,
    AddTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage,
    TaskDetailPage,
    LoginPage,
    taskTypePage,
    RegisterPage,
    AddTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GetMessageService,
    userService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
