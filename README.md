# Electron + Vite + Vue 3 + vuetify + Module Federation Example

An Electron desktop application demonstrating **Vue 3 with Pinia stores in Module Federation** architecture, built with Vite and Vuetify.

## 🏗️ Architecture

- **Electron Desktop App**: Main application with Vue 3 + Vuetify + Pinia
- **Module Federation**: Remote components integrated into the Electron app
- **MRE (Minimal Reproducible Example)**: Simplified version for testing

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 20.12.0+ (recommended to use [Volta](https://volta.sh/))
- **Yarn**: 4.3.1+

### Installation

````bash
# Install dependencies
yarn  // generates yarn.lock
yarn install:deps

### Development

Start both host and remote applications:

```bash
# Start main application + remote module
yarn dev
````

Or run individually:

```bash
# Remote module only (in separate terminal)
cd src/renderer/src/remote && yarn dev
```

### Build

```bash
# Build main application
yarn build

# Build example
yarn build
```

### Testing the Example

1. **Start the applications**:

   ```bash
   yarn dev:all
   ```

2. **Interact with the counter**:
   - Click the counter buttons in both host and remote modules
   - See how the Pinia store state is shared between federated modules

## 📁 Project Structure

```
├── src/renderer/src/remote/     # Remote module (federated)
│   ├── src/components/Counter.vue
│   ├── src/stores/counter.ts
│   └── vite.config.ts          # Fixed configuration
├── mre/                        # Minimal Reproducible Example
│   └── src/renderer/src/remote/ # Working reference implementation
└── README.md                   # This file
```

## 🛠️ Development Commands

```bash
# Format code
yarn format

# Type checking
yarn typecheck:node  # Main process
yarn typecheck:web   # Renderer process
yarn typecheck       # All

# Linting
yarn lint
```

## ✨ Features

- **Module Federation**: Host and remote applications working together
- **Pinia Store Sharing**: Shared state management across federated modules
- **Vue 3 Composition API**: Modern Vue development patterns
- **Vuetify UI**: Material Design components
- **TypeScript**: Full type safety
- **Electron**: Desktop application wrapper

## 🤝 Contributing

This example serves as a reference for Vue 3 + Pinia + Module Federation integration. Feel free to use it as a starting point for your own projects.

## 📄 License

MIT License - feel free to use this example in your projects.

To ensure your native dependencies are always matched electron version, simply add script "postinstall": "electron-builder install-app-deps" to your package.json.

```bash
$ yarn postinstall
```

Build packages for the different platforms

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

## Developer configurations

### VS Code recommended pluggins

- [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatter for JS code on the IDE.
- [**Volar**](https://marketplace.visualstudio.com/items?itemName=Vue.volar): Intellisense for Vue 3 language inspection (You need to disable `Vetur` to avoid conflicts)
- **ESlint**: Official linter for JS also in VS Code.
- [**Stylelint**](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): Official Stylelint extension for Visual Studio Code.
- [**Code Spell Checker**](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Spell for code

### Formatting

- [**Prettier**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatter for JS/TS code attached to compiler.
- **ESlint**: Configured with Vite and the builder.

### Debugging

- **[Vite](https://vitejs.dev/)**: For faster developing
- **[Electron-vite](https://evite.netlify.app/)**: Vite wrapper for using with **Electron**

### Components

- [**Vue Router 4**](https://router.vuejs.org/): The official Vue router
- [**Pinia**](https://pinia.vuejs.org/): Stores library for Vue 3
- [**Vuetify 3**](https://next.vuetifyjs.com/en/): component framework based in bootstrap 4

### Language

- [**Typescript Vue**](https://blog.logrocket.com/how-to-use-vue-3-typescript/): Using typescript in this scaffolding

### Building

- [**Electron-builder**](https://www.electron.build/): Configured for Windows, Linux and MacOS.

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## Development Certificate

### Container

When we work with the container of the API server, the linux inside the container generates a development certificate to use it with the HTTPS protocol, without this certificate, it will not let us make requests.
Follow the next steps to download the certificate from the server (in the container) and installing in the local machine for use in the UI frontend application.

1. open dev tools in chrome, go to `Security` tab and click on the **View certificate**.
1. go to **Details** tab and click **Export** to File...
1. then Certificate Export Wizard windows will pop up and click the **Next** button to continue.
1. remain DER encoding options, click Next and choose Browse, save it and name the certificate as localhost.cer. You should see your saved certificate on your saved path chosen just now.
1. open `chrome://settings/` by copy this in the browser url box.
1. choose Privacy and security in the side `menu > Security > Advanced > Managed Certificates`
1. Certificates window will pop up as below. Choose `Trusted Root Certificate Authorities` tab and click Import... enter image description here
1. import the localhost certificate which saved to chosen path just now at steps 4.
1. click browse to import the **locahost.cer** and click Yes to finish the import certificate process.
1. Close everything and restart your chrome browser. Remember to rebuild and rerun your project if you running the project using dotnet run command prompt for the changes to take effect in the browser. Now you should be able to access any localhost website urls with secure tag.

### Host Operative System (Windows/Linux)

Dotnet can create a trusted local development certificate with the command.

```bash

```
