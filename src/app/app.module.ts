import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';


import { AppRoutingModule } from './app-routing.module';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   // DashboardComponent,
    NopagesfoundComponent,
    //LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    //ProductComponent,
    //CatalogueComponent,
    //PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
