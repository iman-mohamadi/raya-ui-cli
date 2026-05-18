#!/usr/bin/env node

import { spawnSync } from 'child_process';

// Get arguments passed after `npx raya-ui`
const args = process.argv.slice(2);
const command = args[0]; // e.g., "add"
const componentName = args[1]; // e.g., "wheel-picker"

if (command === 'add' && componentName) {
  const registryUrl = `https://raya-ui.com/registry/${componentName}.json`;
  
  console.log(`\nAdding ${componentName} from Raya UI...\n`);

  // Execute shadcn-vue under the hood
  const result = spawnSync('npx', ['shadcn-vue@latest', 'add', registryUrl], {
    stdio: 'inherit', // Passes the terminal output/input directly to the user
    shell: true
  });

  if (result.error) {
    console.error("Failed to execute shadcn-vue CLI:", result.error);
    process.exit(1);
  }
} else {
  console.log(`
Raya UI CLI

Usage:
  npx raya-ui@latest add <component-name>

Example:
  npx raya-ui@latest add wheel-picker
  `);
}