import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { GIFTitleCheckboxComponent } from './components/giftitle-checkbox/giftitle-checkbox.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent,GIFTitleCheckboxComponent],
  imports: [CommonModule,MaterialModule],
  exports: [SidebarComponent,LazyImageComponent],
})
export class SharedModule {}
