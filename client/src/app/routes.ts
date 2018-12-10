import { PedalsComponent } from './pedals/pedals.component';
import { PedalDetailsComponent } from './pedals/pedal-details/pedal-details.component';
import { HomeComponent } from './home/home.component';

export const appRoutes = [

  {
    path: 'pedals',
    component: PedalsComponent,
  },
  {
    path: 'pedals/:id',
    component: PedalDetailsComponent,
  },
  {
    path: 'pedals/:id/:name',
    component: PedalDetailsComponent,
  },
  {
    path: 'user', loadChildren: './user/user.module#UserModule'

  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
]