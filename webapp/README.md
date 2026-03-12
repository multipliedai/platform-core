# @platform-core/webapp

Utilities and helpers specific to **React** web applications.

This package is intended for use only in web (browser) projects. Do not import it from React Native or Node.js services.

## Contents

- **Browser utilities** – DOM, URL, or window helpers  
- **Web helpers** – Formatting, parsing, or UI helpers for the web  
- **UI utilities** – Shared UI logic or hooks for web  
- **Web API** – API or fetch helpers tailored for the web app  

## Usage

```ts
import { formatDate } from '@platform-core/webapp'
```

## Guidelines

- Only add code that depends on the browser or React web environment.  
- For shared types, schemas, or models, use **@platform-core/common** instead.  
- Keep functions focused and reusable across web apps.  

## Adding New Exports

1. Add the utility in the appropriate subfolder.  
2. Re-export from this package’s main `index.ts`.  

See the root [platform-core README](../README.md) for repository structure and best practices.
