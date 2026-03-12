# platform-core

Core shared packages for web, mobile, and backend services including common models, schemas, and platform-specific utilities.

This repository is a **monorepo with workspaces**. Each project can import **only what it needs** (e.g. `@platform-core/mobileapp` for React Native).

It is designed to support:

- **React** web applications  
- **React Native** mobile applications  
- **Node.js** backend services  

## Repository Structure

```
platform-core
├ package.json
├ packages
│   ├ common       # Shared models, types, schemas used across all platforms
│   │   ├ package.json
│   │   └ src
│   ├ mobileapp    # Utilities specific to React Native apps
│   │   ├ package.json
│   │   └ src
│   ├ webapp       # Utilities specific to React web applications
│   │   ├ package.json
│   │   └ src
│   └ services     # Utilities for Node.js backend services
│       ├ package.json
│       └ src
└ README.md
```

## Packages Overview

| Package | Use in | Description |
|--------|--------|-------------|
| **@platform-core/common** | All | Types, schemas, models, validation (platform-agnostic) |
| **@platform-core/mobileapp** | React Native | Mobile helpers, storage, device, API |
| **@platform-core/webapp** | React web | Browser helpers, formatting, UI, API |
| **@platform-core/services** | Node.js | Logging, DB, API integrations |

### Example usage

```ts
// Shared types/models (any project)
import { UserModel } from '@platform-core/common'

// React Native only
import { getDeviceInfo } from '@platform-core/mobileapp'

// React web only
import { formatDate } from '@platform-core/webapp'

// Node.js services only
import { createLogger } from '@platform-core/services'
```

## Installing in consumer projects

Install only the packages you need:

```bash
npm install @platform-core/common
npm install @platform-core/mobileapp    # React Native
npm install @platform-core/webapp       # React web
npm install @platform-core/services     # Node.js
```

React Native will **not** load webapp or services; each app uses only its package(s) plus `common` if needed.

## Local development (workspaces)

From the repo root:

```bash
npm install
```

This installs dependencies and links `packages/*` via workspaces. Packages that depend on `@platform-core/common` will use the local `packages/common` when developing inside this repo.

## Why this structure?

- Install **only what you need** per project  
- Independent versioning per package (when published)  
- Clear separation: common vs platform-specific  
- Standard monorepo pattern (workspaces)  

## Adding New Utilities

1. Place code in the right package under `packages/<name>/src/`.  
2. Export from that package’s `src/index.ts`.  
3. Keep functions reusable and not project-specific.  

## Best Practices

- Keep **common** platform-agnostic  
- Avoid application-specific logic in packages  
- Document complex utilities  

## Future Improvements

- Publish packages as private npm modules  
- Add Turborepo or pnpm workspaces for faster builds  
- Unit tests, linting, formatting  
- CI/CD for builds and publishing  

## License

Internal use only.
