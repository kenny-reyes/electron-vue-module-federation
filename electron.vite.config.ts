import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [
      federation({
        name: 'host',
        remotes: {
          remote: {
            type: 'module',
            name: 'remote',
            entry: 'http://localhost:4174/remoteEntry.js',
            entryGlobalName: 'remote',
            shareScope: 'default'
          }
        },
        exposes: {},
        filename: 'remoteEntry.js',
        shared: {
          vue: {
            singleton: true
          },
          pinia: {
            singleton: true
          }
        }
      }),
      vue(),
      vuetify({
        autoImport: true
      }),
      viteCommonjs(),
      VueI18nPlugin({
        include: resolve(__dirname, './locales/**')
      })
    ],
    publicDir: false,
    css: {
      preprocessorOptions: {
        scss: { additionalData: ` @import "@/styles/variables.scss";` }
      }
    }
  }
})
