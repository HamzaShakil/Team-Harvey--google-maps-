import { Component } from '@angular/core';
import { OnChanges, AfterViewInit } from '@angular/core';
import { GeocodesService } from './geocodes.service';
import { TravelMarker, TravelMarkerOptions, TravelData, TravelEvents, EventType } from 'travel-marker';
var markerStore = {};
declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, AfterViewInit {

marker: TravelMarker = null;
  geoPoints: any[];
  zoom: number = 17;
  markers: any[];
  map: any;

  // initial center position for the map
  lat: number = 24.880368 
  lng: number = 67.045409;
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
      

    });


    setTimeout(function () {
      self.drawpoints(
        {
          "Points": [
         {
                  "type": "person",
                 
                     "id":'A',
                      "lat":24.880749,
                      "lon":67.041306,
                  
            },
            {
                  "type": "person",
                 
                   "id":'B',
                      "lat":24.880490,
                      "lon":67.041926,
                 
            },

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
              "lat": 24.881024,
              "lon": 67.042035,
              "data": {
              }

            },

            {
              "type": "person",
              "id": 'B',
               "lat": 24.880834,
              "lon": 67.042621,
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
              "lat": 24.881520,
              "lon": 67.043127,
              "data": {
              }
            },

            {
              "type": "person",
              "id": 'B',
            "lat":24.881072,
              "lon": 67.043243,
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
              "lat": 24.881734,
              "lon": 67.043758,
              "data": {
              }
            },

            {
              "type": "person",
              "id": 'B',
                "lat": 24.881497,
              "lon": 67.044173,
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
              "lat": 24.882291,
              "lon": 67.044930,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
              "lat": 24.881808,
              "lon": 67.044849,
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
              "lat": 24.882496,
              "lon":67.045239,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
             "lat": 24.881629,
              "lon": 67.045207,
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
              "lat": 24.882817, 
              "lon": 67.046076,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
               "lat": 24.881853,
              "lon": 67.045861,
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
              "lat": 24.883157,
              "lon": 67.046548,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
              "lat": 24.882204,
              "lon": 67.046580,
              "data": {
              }
            }
          ]

        });

    }, 90000)
    setTimeout(function () {
      self.drawpoints(
        {
          "Points": [
            {
              "type": "person",
              "id": 'A',
              "lat":24.883508,
              "lon": 67.047160,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
              "lat": 24.882719,
              "lon": 67.047589,
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
              "lat": 24.883878 ,
              "lon": 67.047750,
              "data": {
              }
            },
            {
              "type": "person",
              "id": 'B',
              "lat": 24.883011,
              "lon": 67.048254,
              "data": {
              }
            }

          ]

        });

    }, 11000)



  }

  drawpoints(data) {


    let self = this;
    let i = 0;
var Colors = [
    "#FF0000", 
    "#00FF00"
    
];

    data.Points.forEach(function (res) {
    
      if (markerStore.hasOwnProperty(res.id)) {
        self.lat=res.lat; 
        self.lng=res.lon;

        // new google.maps.Marker({position: start, map: this.map, label: 'A'});
        markerStore[res.id].setPosition(new google.maps.LatLng(res.lat, res.lon));
        //pushing previous cordinate of marker
        markerStore[res.id].previousLatLngs.push(new google.maps.LatLng(res.lat, res.lon));
        
      
        // create circle on last position
        // var cityCircle = new google.maps.Circle({
        //   strokeColor: '#FF0000',
        //   strokeOpacity: 0.8,
        //   strokeWeight: 2,
        //   fillColor: '#FF0000',
        //   fillOpacity: 0.35,
        //   map: self.map,
        //   center: new google.maps.LatLng(res.lat, res.lon),
        //   radius: 2
        // });
        var lineSymbol = {  
    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW  
  };  
        //create polyline
        var flightPath = new google.maps.Polyline({
          path: markerStore[res.id].previousLatLngs,
          geodesic: true,
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
           strokeColor: Colors[i],
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(self.map);
        i++;

      } 
      else {

        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,

          position: new google.maps.LatLng(res.lat, res.lon),
          title: res.lat.toString(),
          map: self.map,
          cameraOnMarker: true,

        });
        markerStore[res.id] = marker;
        markerStore[res.id].previousLatLngs = [];
        
     
      }
     
    });
    
  }
}
