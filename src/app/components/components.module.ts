import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsModule } from './../patterns/patterns.module';
import { HeroComponent } from './hero/hero.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeroComponent,
    NavigationBarComponent,
    ProductsListComponent,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PatternsModule
  ],
  exports: [
    HeroComponent,
    NavigationBarComponent,
    ProductsListComponent,
    SearchComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
