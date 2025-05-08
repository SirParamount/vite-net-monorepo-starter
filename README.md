# Monorepo Starter for React, Typescript, .NET Web API Applications

This repository serves as a scaffolding starter for building modern web applications using a monorepo structure. It is designed to streamline development workflows, promote code reuse, and simplify project management across multiple applications and shared packages.

## Features

- **Monorepo Structure**: Organize multiple applications and shared packages in a single repository.
- **Vite for Frontend Development**: Leverage Vite's fast build and development server for modern web applications.
- **TypeScript Support**: Fully configured TypeScript setup with project references for efficient builds and type-checking.
- **Extensible App Configs**: Each app maintains its own configuration, inheriting from centralized base configs for ESLint, Prettier, Tailwind CSS, and Vite to ensure consistency with flexibility.
- **Vitest for Testing**: Preconfigured Vitest setup for unit testing.
- **Backend Integration**: Includes a .NET Web API backend project for backend development.
- **Tailwind CSS**: Preconfigured Tailwind CSS setup for rapid UI development with centralized configuration.
- **Core Components**: A dedicated `core` folder for foundational, reusable, and context-agnostic components and utilities.
- **Shared Components**: A `shared` folder for reusable components, utilities, or logic that are shared across multiple apps but may have app-specific dependencies.

## Project Structure

```
backend/   # .NET backend project
frontend/  # Frontend monorepo root
  apps/
    app1/  # First frontend application
    app2/  # Second frontend application
  packages/
    core/    # Core components and utilities
    shared/  # Shared components and utilities
    config/  # Centralized configurations (TypeScript, Vite, Tailwind, etc.)
  scripts/  # Utility scripts for development
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- [.NET SDK](https://dotnet.microsoft.com/download) (.NET v9 required for backend development)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vite-net-monorepo-starter
   ```

2. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

### 🔒 Local HTTPS Development

To enable HTTPS for local development, follow these steps:

1. **Install mkcert**:

   - macOS: `brew install mkcert`
   - Windows: `choco install mkcert`
   - Linux: Use your distro’s package manager.

2. **Run mkcert -install**:

   - This step is required to install the local Certificate Authority (CA) and must be done **once per machine** (requires admin rights):
     ```bash
     mkcert -install
     ```

3. **Generate Certificates**:
   - After completing the above step, run the following command to generate local certificates:
     ```bash
     npm run cert:generate
     ```

### Development

- Start the development servers for all apps and the backend:
  ```bash
  npm run dev
  ```

This command will concurrently start the backend and the development servers for `app1` and `app2`.

### Testing

- Run tests for all projects:

  ```bash
  npm run test
  ```

  This command runs tests for both `app1` and `app2` concurrently.

- Run tests for all projects in watch mode:

  ```bash
  npm run test:watch
  ```

  This command runs tests for both `app1` and `app2` concurrently in watch mode.

- Run tests for `app1` only:

  ```bash
  npm run test:app1
  ```

- Run tests for `app1` in watch mode:

  ```bash
  npm run test:watch:app1
  ```

- Run tests for `app2` only:

  ```bash
  npm run test:app2
  ```

- Run tests for `app2` in watch mode:
  ```bash
  npm run test:watch:app2
  ```

### Tailwind CSS Development

Tailwind CSS is preconfigured in this monorepo to streamline UI development. Below are some key points for working with Tailwind during development:

1. **Configuration**:

   - The base Tailwind configuration file is located at `packages/config/tailwind/tailwind.base.cjs`.
   - Each app (e.g., `app1`, `app2`) has its own `tailwind.config.cjs` file that extends the shared configuration.

2. **Extending the Theme**:

   - Each app can extend the base Tailwind theme by modifying its `tailwind.config.cjs` file. For example:

     ```javascript
     const baseConfig = require('../../packages/config/tailwind/tailwind.base.cjs');

     module.exports = {
       ...baseConfig,
       theme: {
         ...baseConfig.theme,
         extend: {
           ...baseConfig.theme.extend,
           colors: {
             appSpecificColor: '#FF5733',
           },
           spacing: {
             192: '48rem',
           },
         },
       },
     };
     ```

3. **Global Styles**:

   - Global styles are defined in the `index.css` file of each app (e.g., `apps/app1/src/index.css`).

4. **Development Workflow**:

   - Tailwind CSS classes can be directly used in your JSX/TSX files.

5. **Building for Production**:
   - Tailwind CSS is automatically purged of unused styles during the production build to ensure optimal performance.

For more details, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs).

### Core Components

The `core` folder is designed to house foundational components and utilities that are completely independent of the applications (`app1`, `app2`) or any specific context. These components are:

- **Reusable**: They can be used across multiple apps without modification.
- **Context-Agnostic**: They do not rely on any app-specific logic or side effects.
- **Foundational**: They provide the building blocks for higher-level components or features.

#### Why Have a `core` Folder?

The `core` folder promotes:

1. **Separation of Concerns**: By isolating foundational components, we ensure that they remain clean, reusable, and easy to maintain.
2. **Scalability**: As the project grows, having a dedicated place for core components helps in managing complexity.
3. **Consistency**: Shared foundational components ensure a consistent look, feel, and behavior across all apps.

Examples of what might go into the `core` folder include:

- Basic UI components like buttons, inputs, or modals.
- Utility functions or hooks that are generic and reusable.

By keeping the `core` folder focused on these principles, we ensure that it remains a reliable and reusable foundation for the entire monorepo.

### Shared Components

The `shared` folder is designed to house components, utilities, or logic that are shared across multiple apps but may have some app-specific dependencies or logic. These components may:

- Depend on app-specific logic or configurations.
- Be tailored for specific use cases while still being reusable.

#### Why Have a `shared` Folder?

The `shared` folder promotes:

1. **Code Reusability**: Avoids duplication of logic or components across apps.
2. **Modularity**: Keeps shared logic separate from app-specific code, making it easier to maintain.
3. **Flexibility**: Allows for shared components that can adapt to app-specific requirements.

#### Examples of Shared Components

- Higher-order components (HOCs) or context providers used across apps.
- Shared hooks or utilities that depend on app-specific configurations.
- Components that are reused but styled or configured differently for each app.

## Scripts

Here are the available scripts in this monorepo:

### Root Scripts

- **`npm run dev`**: Starts the backend and both apps (`app1` and `app2`) concurrently.
- **`npm run dev:app1`**: Starts the development server for `app1`.
- **`npm run dev:app2`**: Starts the development server for `app2`.
- **`npm run dev:backend`**: Starts the backend in watch mode.
- **`npm run build`**: Builds both `app1` and `app2` sequentially.
- **`npm run build:app1`**: Builds the production bundle for `app1`.
- **`npm run build:app2`**: Builds the production bundle for `app2`.
- **`npm run preview:app1`**: Previews the production build for `app1`.
- **`npm run preview:app2`**: Previews the production build for `app2`.
- **`npm run test`**: Runs all tests for `app1` and `app2` concurrently.
- **`npm run test:watch`**: Runs all tests for `app1` and `app2` in watch mode concurrently.
- **`npm run test:app1`**: Runs tests for `app1`.
- **`npm run test:app2`**: Runs tests for `app2`.
- **`npm run test:watch:app1`**: Runs tests for `app1` in watch mode.
- **`npm run test:watch:app2`**: Runs tests for `app2` in watch mode.
- **`npm run cert:generate`**: Generates local HTTPS certificates.

### App-Specific Scripts

#### `app1`

- **`npm run dev`**: Starts the Vite development server for `app1`.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

#### `app2`

- **`npm run dev`**: Starts the Vite development server for `app2`.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

---

Refer to the individual `package.json` files for more details on scripts specific to each app or package.

## Customization

This starter is designed to be flexible and can be customized to fit your project's needs. Modify the configurations in the `packages/config` directory to adjust ESLint, Prettier, Tailwind, or Vite settings.

---

Happy coding! 🚀
