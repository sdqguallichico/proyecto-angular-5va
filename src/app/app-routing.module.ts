import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagesfoundComponent },
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
