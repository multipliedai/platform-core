# @platform-core/mobileapp

Utilities and helpers specific to **React Native** mobile applications.

This package is intended for use only in React Native projects. Do not import it from web or Node.js services.

## Contents

- **Mobile helpers** – React Native–specific utilities  
- **Storage** – AsyncStorage or other mobile storage helpers  
- **Device** – Device info, permissions, platform detection  
- **Mobile API** – API or network helpers tailored for the mobile app  

## Usage

```ts
import { getDeviceInfo } from '@platform-core/mobileapp'
```

## Guidelines

- Only add code that depends on React Native or mobile-specific APIs.  
- For shared types, schemas, or models, use **@platform-core/common** instead.  
- Keep functions focused and reusable across mobile apps.  

## Adding New Exports

1. Add the utility in the appropriate subfolder under `src/`.  
2. Re-export from this package’s `src/index.ts`.  

See the root [platform-core README](../../README.md) for repository structure and best practices.
