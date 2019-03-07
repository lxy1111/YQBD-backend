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
import { missionService } from '../providers/missionService';
import { EntryFormPage } from '../pages/entryForm/entryForm';
import { GroupsPage } from '../pages/groups/groups';
import { GroupDetailsPage } from '../pages/groups/groupDetails';
import { AddGroupPage } from '../pages/groups/AddGroup';
import { groupService } from '../providers/groupService';
import { ApplicantPage } from '../pages/chat/applicants';
import { ApplicantDetailPage } from '../pages/chat/applicantDetail';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ImgService } from '../providers/ImgService';
import { ToastService } from '../providers/ToastService';


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
    AddTaskPage,
    EntryFormPage,
    GroupsPage,
    GroupDetailsPage,
    AddGroupPage,
    ApplicantPage,
    ApplicantDetailPage
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
    AddTaskPage,
    EntryFormPage,
    GroupDetailsPage,
    GroupsPage,
    AddGroupPage,
    ApplicantPage,
    ApplicantDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GetMessageService,
    userService,
    missionService,
    groupService,
   ImagePicker,
   ImgService,
   ToastService,
   Camera,
    File,
   FileTransferObject,
   FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
