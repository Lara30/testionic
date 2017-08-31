import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController,private geolocation:Geolocation){
  }
  load() {
    //get current position
      this.geolocation.getCurrentPosition().then((pos) => {
        console.log('lat:'+pos.coords.latitude +',lon:'+pos.coords.longitude);
      });
      //to stop watching
  }
}
