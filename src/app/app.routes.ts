import { Routes } from '@angular/router';
import {HOME_ROUTES} from './homepage';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => HOME_ROUTES
  },
];
