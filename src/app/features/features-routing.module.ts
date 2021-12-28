import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoutes from '@app/shared/routes';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: AppRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
