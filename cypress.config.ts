import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    supportFile: 'cypress/support/component.ts',
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}", 
    indexHtmlFile: "cypress/support/component-index.html",
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
