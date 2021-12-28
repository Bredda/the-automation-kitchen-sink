import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { BrokenImagesComponent } from './broken-images/broken-images.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    BrokenImagesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
