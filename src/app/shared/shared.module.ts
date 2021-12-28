import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [InfoCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [InfoCardComponent, MaterialModule],
})
export class SharedModule {}
