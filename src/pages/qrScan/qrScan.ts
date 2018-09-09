import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-qrScan',
  templateUrl: 'qrScan.html'
})
export class qrScanPage {
  // options: BarcodeScannerOptions;
  // encodeText: string = '';
  // encodeData: any = {};
  // scannerData: any = {};
  barcodeData: string = '';



  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner) {




  }
  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  // scan() {
  //   this.options = {
  //     prompt: 'Scan your barcode'
  //   };
  //   this.scanner.scan(this.options).then((data) => {
  //     this.scannerData = data;
  //   }, (err) => {
  //     console.log('Error :', err);
  //   })
  // };
  // encode() {
  //   this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
  //     this.encodeData = data;

  //   }, (err) => { })
  // };

}
