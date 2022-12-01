import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    LoginComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    LoginComponent,
    PagesComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthModule,

  ]
})
export class PagesModule { }
