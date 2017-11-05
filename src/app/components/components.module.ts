import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeroComponent } from './hero/hero.component';
import { PatternsModule } from './../patterns/patterns.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    PatternsModule
  ],
  declarations: [
    ProductsListComponent,
    SidebarComponent,
    NavigationBarComponent,
    HeroComponent,
    SearchComponent
  ],
  exports: [
    ProductsListComponent,
    SidebarComponent,
    NavigationBarComponent,
    HeroComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
