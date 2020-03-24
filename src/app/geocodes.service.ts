import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class GeocodesService {
   getPositions():Observable<any>{
      return Observable.of({
        "Points":[
            {
                  "type": "person",
                 
                     "id":'A',
                      "lat":51.51324,
                      "lon":-0.09909000000000001,
                  
            },
            {
                  "type": "person",
                 
                   "id":'B',
                      "lat": 51.51478 ,
                      "lon":-0.08078,
                 
            },
            // {
            //       "type": "person",
            //       "pos": {
            //           "id":'C',
            //           "lat": 34.1083449,
            //           "lon": -117.2897652
            //       },
            //       "data": {}
            // },
            // {
            //       "type": "person",
            //       "pos": {
            //           "id":'D',
            //           "lat": 41.8755546,
            //           "lon": -87.6244212
            //       },
            //       "data": {} 
                  
            // }
        ],
        // lines:[
        //   {
        //     "type": "flight",
        //     "pos": {
        //         "src": {
        //               "lat": 50.1106529,
        //               "lon": 8.6820934
        //         },
        //         "dest": {
        //               "lat": 52.374436,
        //               "lon": 4.8979956033677
        //         }
        //     },
        //     "data": {
        //     }
        //   },
        //   {
        //     "type": "flight",
        //     "pos": {
        //         "src": {
        //               "lat": 48.8566101,
        //               "lon": 2.3514992
        //         },
        //         "dest": {
        //               "lat": 40.4167047,
        //               "lon": -3.7035825
        //         }
        //     },
        //     "data": { }
          
        //   }
        // ]
      }).delay(1000);
   }
}