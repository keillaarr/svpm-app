import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage {

  async ionViewDidEnter() {
    await Browser.open({
      url: 'https://website.svpm.mar.mil.br/'
    });
  }

}