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
                      "lat":51.513237,
                      "lon":-0.099102,
                  
            },
            {
                  "type": "person",
                 
                   "id":'B',
                      "lat": 51.514786 ,
                      "lon":-0.080799,
                 
            },
            // {
          
        ],
       
      }).delay(1000);
   }
}