import { Component, OnInit } from '@angular/core';
import { LocationService } from '../app/services/location.service';
import {ILocation} from '../app/location';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  public lat: number = 12.954517;
  public lng: number = 77.3507335;


  public msg : string;
  public agmMarkers: ILocation[] = [
  {
    lat: 45.954517,
    lng: 23.3507335,
    code: "TEST01"
  }
 ];

 constructor(private locationService : LocationService) { }

ngOnInit() {
 this.locationService
    .getLocation()
    .subscribe((msg: any) => {
      console.log("msg: "+JSON.stringify(msg));
      this.updateMarkers(msg);
    });
}

public updateMarkers(msg){
 this.agmMarkers = [];
  for (let entry of msg) {
    console.log("entry.lat: "+entry.latlng.lat); 
    console.log("entry.lng: "+entry.latlng.lng);
    console.log("entry.code: "+entry.code); 
    this.agmMarkers.push({
      lat: entry.lat,
      lng: entry.lng,
      code: entry.code
    });
  }
 }
}