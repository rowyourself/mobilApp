import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goToFunctionality1() {
    this.navCtrl.navigateForward('/subirImg');
  }

  goToFunctionality2() {
    this.navCtrl.navigateForward('/subirPdf');
  }

  goToFunctionality3() {
    this.navCtrl.navigateForward('/subirLink');
  }

  goToFunctionality4() {
    this.navCtrl.navigateForward('/subirDoc');
  }
}

