import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PricingComponent } from './pricing/pricing.component';


import { ProductComponent } from './product/product.component';
import { LearnComponent } from './learn/learn.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  // {
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'product', component: ProductComponent },
      { path: 'learn', component: LearnComponent },
      { path: 'blog', component: BlogComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'privacy', component: PrivacyComponent }
    // path: 'home',Component: HomeComponent,
    // path: 'about',Component: AboutComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     loadChildren: './dashboard/dashboard.module#DashboardModule'
    //   },
    //  ],
    // canActivate: [IsAuthenticatedGuard]
  // },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
