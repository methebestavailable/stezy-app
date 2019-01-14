import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  // {

      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ProductComponent },
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
