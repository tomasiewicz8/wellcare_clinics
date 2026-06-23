import { Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProjectComponent } from './pages/our-project/our-project.component';
import { TipsComponent } from './pages/tips/tips.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Wellcare Clinics' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us | Wellcare Clinics' },
  { path: 'our-project', component: OurProjectComponent, title: 'Our Project | Wellcare Clinics' },
  { path: 'tips', component: TipsComponent, title: 'Tips | Wellcare Clinics' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Wellcare Clinics' },
  { path: '**', redirectTo: '' },
];