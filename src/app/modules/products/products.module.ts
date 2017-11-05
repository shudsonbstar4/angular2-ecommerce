import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRouting } from './products.routing';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ProductsRouting
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
