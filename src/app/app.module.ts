//Tabs
//import {MatTabsModule} from '@angular/material/tabs' -- Borrar;
//Google Maps
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
//app.routing.ts imports
import { routing,appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateRoomsComponent } from './components/private-rooms/private-rooms.component';
import { DormsComponent } from './components/dorms/dorms.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToursComponent } from './components/tours/tours.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { BookComponent } from './components/book/book.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    PrivateRoomsComponent,
    DormsComponent,
    FacilitiesComponent,
    ActivitiesComponent,
    AboutComponent,
    ContactComponent,
    ToursComponent,
    FaqsComponent,
    BookComponent,
    PrivacyPolicyComponent,
    VolunteerComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import modul routing
    routing,
    ReactiveFormsModule,
    GoogleMapsModule,
    //MatTabsModule ----- Borrar
    //Funcionamiento Burger Menu
    FormsModule
  ],
  providers: [
    //import routing
    appRoutingProviders,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
