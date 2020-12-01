import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-insight',
  templateUrl: './insight.page.html',
  styleUrls: ['./insight.page.scss'],
})
export class InsightPage implements OnInit {
  tab: string = "today";
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
home() {
    this.navCtrl.navigateRoot(['./home']);
  } 
}
