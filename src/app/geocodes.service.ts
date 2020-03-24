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
                      "lat":24.880667,
                      "lon":67.040669,
                  
            },
            {
                  "type": "person",
                 
                   "id":'B',
                      "lat":24.880310,
                      "lon":67.041583,
                 
            },
            // {
          
        ],
       
      }).delay(1000);
   }
}