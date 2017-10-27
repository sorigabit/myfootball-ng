import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { MarketComponent } from './market/market.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'market', component: MarketComponent },
  { path: 'cart', component: CollectionComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);