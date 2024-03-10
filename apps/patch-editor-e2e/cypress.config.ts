import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run patch-editor:serve:development',
        production: 'nx run patch-editor:serve:production',
      },
      ciWebServerCommand: 'nx run patch-editor:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
