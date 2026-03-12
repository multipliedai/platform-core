# @platform-core/common

Shared models, types, schemas, and validation utilities used across **web**, **mobile**, and **backend** applications.

This package is platform-agnostic and safe to import from:

- React web apps  
- React Native mobile apps  
- Node.js services  

## Contents

- **Types** – Shared TypeScript interfaces and type definitions  
- **Schemas** – Validation schemas (e.g. Zod, JSON Schema)  
- **Models / DTOs** – Data transfer objects and domain models  
- **Validation** – Reusable validation helpers  

## Usage

```ts
import { UserModel } from '@platform-core/common'
import type { ApiResponse } from '@platform-core/common'
```

## Guidelines

- Do **not** add React-, React Native–, or Node-specific code here.  
- Keep all exports usable in any of the three runtimes.  
- Prefer pure types and pure validation logic.  

## Adding New Exports

1. Add the type, schema, or utility in the appropriate subfolder under `src/`.  
2. Re-export from this package’s `src/index.ts`.  

See the root [platform-core README](../../README.md) for repository structure and best practices.
