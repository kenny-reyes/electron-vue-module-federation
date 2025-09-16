import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 4174,
    strictPort: true
  },
  plugins: [
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-app': './src/App.vue'
      },
      remotes: {},
      shared: {
        vue: {
          singleton: true // ❌ Causes frozen counter values
        },
        pinia: {
          singleton: true // ❌ Causes loss of reactivity
        }
      }
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    target: 'chrome89'
  }
})
