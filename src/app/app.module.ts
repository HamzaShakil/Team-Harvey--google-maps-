import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { GeocodesService } from './geocodes.service';
@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
   AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBZ-wCXQuyt3pfIYVpDyVoDQAqp-X7OSI'
    })
   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GeocodesService]
})
export class AppModule { }
