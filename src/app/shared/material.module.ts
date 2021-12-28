import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';

const MATERIAL = [
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatIconModule,
  MatBadgeModule,
  MatListModule,
];

@NgModule({
  imports: [...MATERIAL],
  exports: [...MATERIAL],
})
export class MaterialModule {}
