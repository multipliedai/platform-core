# @platform-core/services

Utilities and helpers for **Node.js** backend services.

This package is intended for use only in server-side Node.js applications. Do not import it from React web or React Native apps.

## Contents

- **Service helpers** – Shared server-side utilities  
- **Logging** – Structured logging, log levels, formatters  
- **Database** – Connection helpers, query utilities (if shared)  
- **API integrations** – HTTP clients, third-party service helpers  

## Usage

```ts
import { createLogger } from '@platform-core/services'
```

## Guidelines

- Only add code that runs in Node.js (no browser or React Native APIs).  
- For shared types, schemas, or models, use **@platform-core/common** instead.  
- Keep functions focused and reusable across services.  
- Never expose internal error details to clients; log and rethrow or handle explicitly.  

## Adding New Exports

1. Add the utility in the appropriate subfolder.  
2. Re-export from this package’s main `index.ts`.  

See the root [platform-core README](../README.md) for repository structure and best practices.
