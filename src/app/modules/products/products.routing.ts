import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const productsRoutes: Routes = [
  { path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      // { path: ':id', component: ProductDetails,
      //   data: { key: 1 }
      // }
    ]
  }
];

export const ProductsRouting = RouterModule.forChild(productsRoutes);
