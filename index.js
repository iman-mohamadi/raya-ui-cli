#!/usr/bin/env node

import { execSync } from 'child_process';

const args = process.argv.slice(2);
const command = args[0]; // e.g., "add"
const componentName = args[1]; // e.g., "wheel-picker"

if (command === 'add' && componentName) {
  // Use GitHub Raw to completely bypass Vercel's firewall
  // IMPORTANT: Update the username and repo name below!
  const registryUrl = `https://raw.githubusercontent.com/iman-mohamadi/raya-ui/refs/heads/main/public/registry/${componentName}.json`;
  
  console.log(`\nAdding ${componentName} from Raya UI...\n`);

  try {
    // Pass the GitHub URL directly to shadcn-vue
    execSync(`npx shadcn-vue@latest add ${registryUrl}`, {
      stdio: 'inherit'
    });
  } catch (error) {
    console.error(`\nSomething went wrong. Please verify your GitHub repo is public and the URL is correct.`);
    process.exit(1);
  }
} else {
  console.log(`\nRaya UI CLI\nUsage:\n  npx raya-ui@latest add <component-name>\n`);
}