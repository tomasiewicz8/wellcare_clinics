import { Routes } from '@angular/router';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProjectComponent } from './pages/our-project/our-project.component';
import { TipsComponent } from './pages/tips/tips.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Wellcare Clinics' },
  { path: 'about-us', component: AboutUsComponent, title: 'Wellcare Clinics | Quiénes somos' },
  { path: 'our-project', component: OurProjectComponent, title: 'Wellcare Clinics | Nuestro proyecto' },
  { path: 'tips', component: TipsComponent, title: 'Wellcare Clinics | Consejos de salud' },
  { path: 'contact', component: ContactComponent, title: 'Wellcare Clinics' },
  { path: '**', redirectTo: '' },
];