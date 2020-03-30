import { Component } from '@angular/core';
import { OnChanges, AfterViewInit } from '@angular/core';
import { GeocodesService } from './geocodes.service';
import { MouseEvent, AgmMap } from '@agm/core';
import { delay } from 'rxjs/operator/delay';

declare var google: any;
var markerStore = {};
var marker;
var heatmap;
var myLatlng;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, AfterViewInit {

  zoom: number = 17;
  map: any;
  lat: number = 24.880368;
  lng: number = 67.045409;
  getpoints:any = [];
  // initial center position for the map

  onMapReady(map: any) {
 
    this.map = map;

  }
  constructor(private geo: GeocodesService) {

  }

  ngOnChanges(ch) {

  }

  ngAfterViewInit() {

  
    var self = this;
    this.geo.getPositions().subscribe(geo => {
      geo.Points.forEach(function (res) {
        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,

          position: new google.maps.LatLng(res.lat, res.lon),
          title: res.lat.toString(),
          map: self.map,
        

        });

      
      
      })

      this.drawpoints(geo);
     

    });
   heatmap = new google.maps.visualization.HeatmapLayer({
    data: self.getpoints,
   
  });
  //heatmap.setMap(self.map);



    setTimeout(function () {
      self.drawpoints(
        {
          "Points": [
            {
              "type": "person",

              "id": 'A',
              "lat": 24.880749,
              "lon": 67.041306,

            },
            {
              "type": "person",

              "id": 'B',
              "lat": 24.880490,
              "lon": 67.041926,

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
              "lat": 24.881072,
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
              "lon": 67.045239,
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

  }

  drawpoints(data) {

    var SlidingMarker = require('marker-animate-unobtrusive');
    let self = this;
    let i = 0;
    var Colors = [
      "#FF0000",
      "#00FF00"

    ];

    data.Points.forEach(function (res) {
     self.getpoints.push(new google.maps.LatLng(res.lat, res.lon));
    





      if (markerStore.hasOwnProperty(res.id)) {

       
      var myLatlng = new google.maps.LatLng(res.lat, res.lon);
  
        
       
        //pushing previous cordinate of marker
        markerStore[res.id].previousLatLngs.push(myLatlng);

        markerStore[res.id].setPosition(myLatlng);
        
       setTimeout(function(){self.map.panTo(myLatlng);},2000);
       




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
        setInterval(function(){  flightPath.setMap(self.map);},1000);
        i++;
       var marker=markerStore['B'].previousLatLngs;
       console.log(marker)

      }
      else {
        var latlng = new google.maps.LatLng(res.lat, res.lon);
        var marker = new SlidingMarker({
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(res.lat, res.lon),
          map: self.map,
          // title: "I'm sliding marker",
          duration: 1000,
          easing: "easeOutQuad"

        });
      
       
        marker.setPosition(latlng);
        markerStore[res.id] = marker;
        markerStore[res.id].previousLatLngs = [];
        markerStore[res.id].previousLatLngs.push(new google.maps.LatLng(res.lat, res.lon));



      }

    });
   heatmap.setMap(self.map);
  
  }
 changeRadius(event: Event) {
   heatmap.set('radius', heatmap.get('radius') ? null : 20);
}
toggleHeatmap(event: Event) {
  heatmap.setMap(heatmap.getMap() ? null : this.map);
}
hideSensorCordinate(event: Event) {
  heatmap.setMap(heatmap.getMap() ? null : this.map);
}
  
}

