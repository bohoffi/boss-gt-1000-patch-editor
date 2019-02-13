import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule
} from '@angular/material';
import { BlockContainerComponent } from './components/block-container/block-container.component';

const matModules: any[] = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatToolbarModule
];
const cdkModules: any[] = [];

@NgModule({
  imports: [CommonModule, matModules, cdkModules],
  exports: [matModules, cdkModules, BlockContainerComponent],
  declarations: [BlockContainerComponent]
})
export class UiModule {}
