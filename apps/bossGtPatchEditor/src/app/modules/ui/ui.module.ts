import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
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
