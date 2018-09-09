import { Component } from '@angular/core';

import { qrScanPage } from '../qrScan/qrScan';
import { LockerPage } from '../locker/locker';
import { HomePage } from '../home/home';
import {ProfilePage} from '../profile/profile'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = qrScanPage;
  tab3Root = LockerPage;
  tab4Root = ProfilePage;


  constructor() {

  }
}

