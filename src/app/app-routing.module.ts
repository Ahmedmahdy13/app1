import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortolioComponent } from './components/portolio/portolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExtraOptions } from '@angular/router';
 
const routes: Routes = [
  {path: "" , component: HomeComponent},

  {path: "home" , component: HomeComponent},
  {path: "about" , component: AboutComponent},
  {path: "portfolio" , component: PortolioComponent},
  {path: "contact" , component: ContactComponent},


];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableViewTransitions: true})],
  imports: [ RouterModule.forRoot( routes)], 

  exports: [RouterModule]
})
export class AppRoutingModule { }
