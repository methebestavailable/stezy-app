import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
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
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
