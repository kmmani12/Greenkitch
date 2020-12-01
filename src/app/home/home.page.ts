import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router, @Inject(APP_CONFIG) public config: AppConfig,) { }
  order1 = true;
  order2 = false;
  order3 = false;
  order4 = true;
  order5 = true;
  order6 = true;
  order7 = false;
  order8 = false;
  order9 = false;
  order10 = true;
  order11 = false;
  order12 = false;
  order13 = false;
  order14 = false;
  order15 = true;
  order16 = true;
  order17 = false;
  order18 = false;
  order19 = false;
  order20 = false;
  order21 = false;
  order22 = true;
  order23 = false;
  order24 = false;
  order25 = false;
  order26 = true;
  order27 = false;
  order28 = false;
  order29 = true;
  order30 = true;
  order31 = true;
  order32 = false;
  order33 = false;
  order34 = true;
  order35 = false;
  order36 = false;
  order37 = true;
  order38 = false;
  order39 = false;
  insight() {
    this.route.navigate(['./insight']);
  }
  select_language() {
    this.route.navigate(['./select-language']);
  }
  buyAppAction() {
    window.open("https://bit.ly/cc2_Suzlon", '_system', 'location=no');
  }

  toggleOrder1() {
    this.order1 = !this.order1;
  }
  toggleOrder2() {
    this.order2 = !this.order2;
  }
  toggleOrder3() {
    this.order3 = !this.order3;
  }
  toggleOrder4() {
    this.order4 = !this.order4;
  }
  toggleOrder5() {
    this.order5 = !this.order5;
  }
  toggleOrder6() {
    this.order6 = !this.order6;
  }
  toggleOrder7() {
    this.order7 = !this.order7;
  }
  toggleOrder8() {
    this.order8 = !this.order8;
  }
  toggleOrder9() {
    this.order9 = !this.order9;
  }
  toggleOrder10() {
    this.order10 = !this.order10;
  }
  toggleOrder11() {
    this.order11 = !this.order11;
  }
  toggleOrder12() {
    this.order12 = !this.order12;
  }
  toggleOrder13() {
    this.order13 = !this.order13;
  }
  toggleOrder14() {
    this.order14 = !this.order14;
  }
  toggleOrder15() {
    this.order15 = !this.order15;
  }
  toggleOrder16() {
    this.order16 = !this.order16;
  }
  toggleOrder17() {
    this.order17 = !this.order17;
  }
  toggleOrder18() {
    this.order18 = !this.order18;
  }
  toggleOrder19() {
    this.order19 = !this.order19;
  }
  toggleOrder20() {
    this.order20 = !this.order20;
  }
  toggleOrder21() {
    this.order21 = !this.order21;
  }
  toggleOrder22() {
    this.order22 = !this.order22;
  }
  toggleOrder23() {
    this.order23 = !this.order23;
  }
  toggleOrder24() {
    this.order24 = !this.order24;
  }
  toggleOrder25() {
    this.order25 = !this.order25;
  }
  toggleOrder26() {
    this.order26 = !this.order26;
  }
  toggleOrder27() {
    this.order27 = !this.order27;
  }
  toggleOrder28() {
    this.order28 = !this.order28;
  }
  toggleOrder29() {
    this.order29 = !this.order29;
  }
  toggleOrder30() {
    this.order30 = !this.order30;
  }
  toggleOrder31() {
    this.order31 = !this.order31;
  }
  toggleOrder32() {
    this.order32 = !this.order32;
  }
  toggleOrder33() {
    this.order33 = !this.order33;
  }
  toggleOrder34() {
    this.order34 = !this.order34;
  }
  toggleOrder35() {
    this.order35 = !this.order35;
  }
  toggleOrder36() {
    this.order36 = !this.order36;
  }
  toggleOrder37() {
    this.order37 = !this.order37;
  }
  toggleOrder38() {
    this.order38 = !this.order38;
  }
  toggleOrder39() {
    this.order39 = !this.order39;
  }
}
