# XO MasterMind 🎮

A modern, production-ready **React Native** application built on **Expo SDK 57**, **React Native 0.86**, **React 19**, and **NativeWind v4 (Tailwind CSS)** with pre-configured TypeScript, Path Aliases, Jest unit & integration testing with coverage reporting, ESLint 9 Flat Config, and Prettier.

---

## 🌟 Tech Stack & Features

- ⚡ **Expo SDK 57** with Continuous Native Generation (CNG)
- 📱 **React Native 0.86** & **React 19**
- 🎨 **NativeWind v4 & Tailwind CSS v3.4** for rapid utility-first styling
- 🗺️ **Expo Router v57** for typed, file-based navigation (`src/app/`)
- 🏷️ **Clean Path Aliases** (`@components/*`, `@utils/*`, `@hooks/*`, `@constants/*`, `@types/*`, `@/*`)
- 🧪 **Jest & React Native Testing Library** for Unit & Integration tests with code coverage
- 🔍 **ESLint 9 (Flat Config)** & **Prettier** with automatic Tailwind CSS class sorting
- 🐶 **Husky & lint-staged** for automated pre-commit linting and formatting
- 🛡️ **Strict TypeScript** configuration

---

## 📋 Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: `v20.19.4+` or `v22.13.0+` (Recommended: Node 22 LTS)
- **Package Manager**: `npm` (or `bun` / `yarn`)
- **Expo Go App** (on physical device) OR **Android Studio / Xcode** (for emulators/simulators)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/React-Native-Boiler-Plate-2026.git <your-project-name>
cd <your-project-name>
```

### 2. Install Dependencies

```bash
npm install
```

> **Note**: When installing additional Expo packages in the future, always use `npx expo install <package-name>` to ensure SDK-compatible versions.

---

## ⚙️ Post-Clone Customization Guide

After cloning the repository, update the following configuration files to match your new application:

### 1. Update `app.json`

Open `app.json` and change the project identifiers:

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-slug",
    "scheme": "yourappscheme",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourname.yourapp"
    },
    "android": {
      "package": "com.yourname.yourapp"
    }
  }
}
```

### 2. Update `package.json`

Open `package.json` and update the metadata:

```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description"
}
```

### 3. Replace App Branding Assets

Replace the default icons and splash screen files in the `assets/` directory:

- `assets/images/icon.png` (App Icon: 1024x1024 px)
- `assets/images/splash-icon.png` (Splash screen icon)
- `assets/images/android-icon-foreground.png` & `background.png` (Android Adaptive icon)
- `assets/images/favicon.png` (Web favicon)

### 4. Clear Metro Cache & Start

Reset Metro bundler cache when first launching after renaming:

```bash
npx expo start -c
```

---

## 📁 Project Structure & Path Aliases

```text
├── assets/                  # App icons, splash screens, and static images
├── src/
│   ├── app/                 # Expo Router screens and layout (_layout.tsx, index.tsx)
│   ├── components/          # Reusable UI components & screen wrappers
│   │   ├── ui/              # Atom UI elements (Button, Card, Badge)
│   │   ├── header.tsx       # Header component
│   │   ├── screen-wrapper.tsx # Safe area screen container
│   │   └── index.ts         # Central barrel export
│   ├── utils/               # Business logic, helpers, and calculation utilities
│   ├── hooks/               # Custom React hooks
│   ├── constants/           # Global app constants
│   ├── types/               # TypeScript interface and type declarations
│   └── global.css           # Tailwind CSS directives
├── __tests__/               # Test suites
│   ├── unit/                # Unit tests for functions and UI components
│   └── integration/         # Integration tests for screens
├── babel.config.js          # Babel config with NativeWind
├── metro.config.js          # Metro bundler config with NativeWind
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint 9 Flat Config
├── .prettierrc              # Prettier rules & Tailwind plugin
├── jest.config.js           # Jest configuration & coverage settings
├── tsconfig.json            # TypeScript config with Path Aliases
└── package.json
```

### Configured Import Aliases

Instead of using relative paths (`../../components/`), use clean aliases:

| Alias           | Target Directory   | Example Usage                                          |
| :-------------- | :----------------- | :----------------------------------------------------- |
| `@components/*` | `src/components/*` | `import { Button } from '@components/ui/button';`      |
| `@utils/*`      | `src/utils/*`      | `import { checkGameStatus } from '@utils/game-logic';` |
| `@hooks/*`      | `src/hooks/*`      | `import { useUser } from '@hooks/useUser';`            |
| `@constants/*`  | `src/constants/*`  | `import { API_URL } from '@constants/config';`         |
| `@types/*`      | `src/types/*`      | `import { UserProfile } from '@types/user';`           |
| `@assets/*`     | `assets/*`         | `import icon from '@assets/images/icon.png';`          |
| `@/*`           | `src/*`            | `import '@/global.css';`                               |

---

## 📜 Available Scripts

| Command                        | Description                                               |
| :----------------------------- | :-------------------------------------------------------- |
| `npm start` / `npx expo start` | Starts the Expo Metro development server                  |
| `npm run android`              | Starts dev server targeting Android emulator/device       |
| `npm run ios`                  | Starts dev server targeting iOS simulator                 |
| `npm run web`                  | Starts dev server for web browser preview                 |
| `npm run test`                 | Runs Jest unit and integration tests                      |
| `npm run test:watch`           | Runs Jest in interactive watch mode                       |
| `npm run test:coverage`        | Runs tests and generates a test coverage table            |
| `npm run lint`                 | Checks code with ESLint 9                                 |
| `npm run lint:fix`             | Fixes auto-fixable ESLint issues                          |
| `npm run format`               | Formats all code with Prettier and sorts Tailwind classes |
| `npm run format:check`         | Checks code formatting without modifying files            |
| `npm run prepare`              | Initializes Husky git hooks                               |

---

## 🧪 Testing Guide

This boilerplate includes pre-configured testing with **Jest** and **React Native Testing Library**:

```bash
# Run test suite
npm run test

# Run tests with coverage report
npm run test:coverage
```

### Writing a Unit Test (`__tests__/unit/`)

```typescript
import { createEmptyBoard } from "@utils/game-logic";

describe("Game Logic", () => {
  it("initializes board correctly", () => {
    expect(createEmptyBoard()).toHaveLength(9);
  });
});
```

### Writing a Component / Integration Test (`__tests__/integration/`)

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HomeScreen from '@/app/index';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    render(<HomeScreen />);
    expect(screen.getByText('React Native 2026')).toBeTruthy();
  });
});
```

---

## 🎨 Styling with Tailwind CSS (NativeWind)

Use Tailwind CSS classes directly via the `className` prop on standard React Native components:

```tsx
import { View, Text } from "react-native";

export function ExampleCard() {
  return (
    <View className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-md">
      <Text className="text-lg font-bold text-white">Tailwind in React Native</Text>
      <Text className="mt-1 text-sm text-slate-400">Styled with NativeWind v4</Text>
    </View>
  );
}
```

---

## 📄 License

This boilerplate is open source and available under the [MIT License](LICENSE).
