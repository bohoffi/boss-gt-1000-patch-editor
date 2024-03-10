import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter, withViewTransitions } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./library/library.component').then((c) => c.LibraryComponent),
  },
  {
    path: 'patch/:patchId',
    loadComponent: () =>
      import('./patch/patch.component').then((c) => c.PatchComponent),
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(ROUTES, withViewTransitions()),
  ],
};
