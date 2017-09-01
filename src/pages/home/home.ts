import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
//essai d'ajout du plugin camera
// import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController,private geolocation:Geolocation) {
  }
      Geoload (lat1, lon1, lat2, lon2, unit) {
          this.geolocation.getCurrentPosition().then((resp) => {
              let lat1 = resp.coords.latitude
              let lon1 = resp.coords.longitude
              let lat2 = 44.133333
              let lon2 = 4.083333

              let radlat1 = Math.PI * lat1/180
              let radlat2 = Math.PI * lat2/180
              let theta = lon1-lon2
              let radtheta = Math.PI * theta/180
              let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

              dist = Math.acos(dist)
              dist = dist * 180/Math.PI
              dist = dist * 60 * 1.1515
              if (unit=="K") { dist = dist * 1.609344 }
              if (unit=="N") { dist = dist * 0.8684 }
              console.log(dist);
          }).catch((error) => {
              console.log('Error getting location', error);
          });
  }}