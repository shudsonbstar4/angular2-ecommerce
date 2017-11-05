import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren: './modules/products/products.module#ProductsModule'}
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true,
});
