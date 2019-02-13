import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';

const matModules: any[] = [
  MatToolbarModule
];
const cdkModules: any[] = [];

@NgModule({
  imports: [matModules, cdkModules],
  exports: [matModules, cdkModules]
})
export class UiModule {}
