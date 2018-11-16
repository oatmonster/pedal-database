import { PedalListComponent } from './pedals/pedal-list.component';
import { PedalDetailsComponent } from './pedals/pedal-details/pedal-details.component';

export const appRoutes = [
  {
    path: 'pedals',
    component: PedalListComponent,
  },
  {
    path: 'pedals/:id',
    component: PedalDetailsComponent,
  }
]