import { Routes } from '@angular/router';
import {HOME_ROUTES} from './homepage';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => HOME_ROUTES
  },
];
