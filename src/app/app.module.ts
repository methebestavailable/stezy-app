import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartenerShipComponent } from './partener-ship/partener-ship.component';


@NgModule({
  declarations: [
    AppComponent,
    PartenerShipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CarouselModule,
    BrowserModule,
    NgbModule
  ],
  providers: [
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
