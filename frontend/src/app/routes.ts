import { PedalListComponent } from './pedals/pedal-list.component';
import { PedalDetailsComponent } from './pedals/pedal-details/pedal-details.component';
import { HomeComponent } from './home/home.component';

export const appRoutes = [
  {
    path: 'home',
    component: HomeComponent,
  }
  {
    path: 'pedals',
    component: PedalListComponent,
  },
  {
    path: 'pedals/:id',
    component: PedalDetailsComponent,
  }
]