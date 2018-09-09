import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { qrScanPage } from '../pages/qrScan/qrScan';
import { HomePage } from '../pages/home/home';
import { LockerPage} from '../pages/locker/locker';
import { ProfilePage } from '../pages/profile/profile'
import { TabsPage } from '../pages/tabs/tabs';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    qrScanPage,
    LockerPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    qrScanPage,
    LockerPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
