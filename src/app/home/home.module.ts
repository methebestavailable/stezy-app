import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewletterComponent } from './newletter/newletter.component';
import { TryusComponent } from './tryus/tryus.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    BannerComponent,
    NewletterComponent,
    TryusComponent,
    LearnComponent,
    AboutComponent,
    PricingComponent,
    ProductComponent,
    BlogComponent,
    ContactComponent,
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent, 
    HeaderComponent, 
    FooterComponent,
    BannerComponent,
    NewletterComponent,
    TryusComponent,
    LearnComponent,
    AboutComponent,
    PricingComponent,
    ProductComponent
  ],
  schemas: [   ],
})
export class HomeModule { }
