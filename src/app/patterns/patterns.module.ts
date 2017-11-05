import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { FilterComponent } from './filter/filter.component';
import { FormControlComponent } from './form-control/form-control.component';
import { NavLinksComponent } from './nav-links/nav-links.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ButtonComponent,
    CardComponent,
    FilterComponent,
    IconComponent,
    FormControlComponent,
    NavLinksComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    FilterComponent,
    FormControlComponent,
    IconComponent,
    NavLinksComponent
  ]
})
export class PatternsModule { }
