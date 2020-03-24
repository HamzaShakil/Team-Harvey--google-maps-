import { Component } from '@angular/core';
import { OnChanges, AfterViewInit } from '@angular/core';
import { GeocodesService } from './geocodes.service';
import { TravelMarker, TravelMarkerOptions, TravelData, TravelEvents, EventType } from 'travel-marker';
var markerStore = {};
declare var google: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnChanges, AfterViewInit {
  
  
  geoPoints: any[];
  zoom: number = 15;
  markers: any[];
  map: any;
  public latitude: number;
  public longitude: number;
  // initial center position for the map
  lat: number = 51.512802;
  lng: number = -0.091324;
onMapReady(map: any) {
    console.log(map);
    this.map = map;
    
  }
  constructor(private geo: GeocodesService) {

  }

  ngOnChanges(ch) {

  }

  ngAfterViewInit() {
   

    var self = this;
    //self.myCoordinates.push({lat:"abc",lon:"no"});


    this.geo.getPositions().subscribe(geo => {
      this.geoPoints = geo.points;
      console.log(geo)
      this.drawpoints(geo);
      this.setMarkers(geo);
    
  });


 setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
               "lat": 51.513580000000005,
                "lon": -0.09634000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 2000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
               "lat": 51.513720000000006,
                "lon": -0.09638000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 3000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                 "lat": 51.5133,
                "lon": -0.09908,
                "data": {
                }
              }
            ]
          
          });

      }, 4000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09895000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 5000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09885000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 6000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09871,
                "data": {
                }
              }
            ]
          
          });

      }, 7000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.513290000000005,
                "lon": -0.09861,
                "data": {
                }
              }
            ]
          
          });

      }, 8000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
               "lat": 51.513290000000005,
                "lon": -0.0985,
                "data": {
                }
              }
            ]
          
          });

      }, 9000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                 "lat": 51.513290000000005,
                "lon": -0.09838000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 10000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                 "lat": 51.51328,
                "lon": 0.09826000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 11000)
      setTimeout(function () {
        self.drawpoints(
          {
            "Points": [
              {
                "type": "person",
                "id": 'A',
                "lat": 51.51328,
                "lon": -0.09826000000000001,
                "data": {
                }
              }
            ]
          
          });

      }, 12000)
     
      

  }
  
drawpoints(data) {
 

    let self = this;
    let i = 0;
    
    data.Points.forEach(function (res) {
  
      if(markerStore.hasOwnProperty(res.id)) {
       
                // new google.maps.Marker({position: start, map: this.map, label: 'A'});
        markerStore[res.id].setPosition(new google.maps.LatLng(res.lat,res.lon));
        markerStore[res.id].previousLatLngs.push(new google.maps.LatLng(res.lat,res.lon));
        console.log(markerStore[res.id].previousLatLngs)
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: self.map,
            center: new google.maps.LatLng(res.lat,res.lon),
            radius: 2
          });
          var flightPath = new google.maps.Polyline({
          path:markerStore[res.id].previousLatLngs ,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
         flightPath.setMap(self.map);

          // var marker = new google.maps.Marker({
          //           animation: google.maps.Animation.DROP,
          //           position: new google.maps.LatLng(res.lat,res.lon),

          //           title:res.lat.toString(),
          //           map:self.map,
          //           markerType:'overlay'
          //       }); 
            }else {
              
                var marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                  
                    position: new google.maps.LatLng(res.lat,res.lon),
                    title:res.lat.toString(),
                    map:self.map,
                    
                }); 
                markerStore[res.id] = marker;
                 markerStore[res.id].previousLatLngs = [];
               // this.marker = new TravelMarker(options);
            } 

     
    });
  }
  setMarkers(data) {
console.log(this.markers)
    let self = this;
    let i = 0;
    data.Points.forEach(function (res) {

     
    });
  }

  
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
function success(err) {
 console.log("success");
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}


