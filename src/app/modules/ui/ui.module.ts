import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatGridListModule
} from '@angular/material';
import { BlockContainerComponent } from './components/block-container/block-container.component';
import { ParameterControlComponent } from './components/parameter-control/parameter-control.component';
import { BlockTypeThemePipe } from './pipes/block-type-theme.pipe';
import { NgDebugDirective } from './directives/ng-debug.directive';

const matModules: any[] = [
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];
const cdkModules: any[] = [];

@NgModule({
  imports: [CommonModule, matModules, cdkModules],
  exports: [matModules, cdkModules, BlockContainerComponent, ParameterControlComponent, NgDebugDirective],
  declarations: [BlockContainerComponent, ParameterControlComponent, BlockTypeThemePipe, NgDebugDirective]
})
export class UiModule {}
