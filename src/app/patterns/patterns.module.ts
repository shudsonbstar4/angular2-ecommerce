import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { FormControlComponent } from './form-control/form-control.component';
import { IconComponent } from './icon/icon.component';
import { NavLinksComponent } from './nav-links/nav-links.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    FilterComponent,
    IconComponent,
    FormControlComponent,
    NavLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
