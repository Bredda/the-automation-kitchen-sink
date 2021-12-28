import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { BrokenImagesComponent } from './broken-images/broken-images.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeaturesComponent,
    BrokenImagesComponent,
    GeolocationComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
