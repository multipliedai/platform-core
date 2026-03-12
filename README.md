# platform-core

Core shared packages for web, mobile, and backend services including common models, schemas, and platform-specific utilities.

This repository contains reusable modules that can be shared across multiple projects to avoid code duplication and maintain consistency across applications.

It is designed to support:

- **React** web applications  
- **React Native** mobile applications  
- **Node.js** backend services  

## Repository Structure

```
platform-core
├ common      # Shared models, types, schemas used across all platforms
├ mobileapp   # Utilities and functions specific to React Native apps
├ webapp      # Utilities and functions specific to React web applications
└ services    # Utilities and functions for Node.js backend services
```

## Packages Overview

### common

Contains shared resources used by all applications.

**Examples:** Types, interfaces, DTOs, schemas, shared models, validation utilities.

**Example usage:**

```ts
import { UserModel } from '@platform-core/common'
```

### mobileapp

Contains utilities and helpers specific to React Native mobile apps.

**Examples:** Mobile-specific helpers, storage utilities, device utilities, mobile API helpers.

**Example:**

```ts
import { getDeviceInfo } from '@platform-core/mobileapp'
```

### webapp

Contains utilities and helpers specific to React web applications.

**Examples:** Browser utilities, web helpers, UI utilities, web-specific API helpers.

**Example:**

```ts
import { formatDate } from '@platform-core/webapp'
```

### services

Contains utilities used by Node.js backend services.

**Examples:** Service helpers, logging utilities, database helpers, API integrations.

**Example:**

```ts
import { createLogger } from '@platform-core/services'
```

## Why platform-core?

This repository helps to:

- Avoid duplicate code across projects  
- Maintain consistent models and types  
- Share reusable business logic  
- Simplify development across platforms  

## Adding New Utilities

When adding new functionality:

1. Place the code in the appropriate package: **common**, **mobileapp**, **webapp**, or **services**.
2. Ensure the function is reusable and not project-specific.
3. Export the function from the package's `index.ts`.

**Example:**

```ts
// common/utils/dateUtils.ts
export * from './utils/dateUtils'
```

## Best Practices

- Keep **common** platform-agnostic  
- Avoid adding application-specific logic  
- Keep functions reusable  
- Document complex utilities  

## Future Improvements

Potential enhancements:

- Publish packages as private npm modules  
- Setup pnpm / turborepo / nx workspace  
- Add unit tests  
- Add linting and formatting rules  
- CI/CD pipeline for automatic builds  

## License

Internal use only.
