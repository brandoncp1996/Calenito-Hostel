import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [

    {path: '', component: HomepageComponent},
    {path: 'private-rooms', component: PrivateRoomsComponent},
    {path: 'dorms', component: DormsComponent},
    {path: 'facilities', component: FacilitiesComponent},
    {path: 'activities', component: ActivitiesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'tours', component: ToursComponent},
    {path: 'faqs', component: FaqsComponent},
    {path: 'book', component: BookComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'volunteer', component: VolunteerComponent},
    {path: '**', component: HomepageComponent}
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);