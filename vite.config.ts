/* eslint-env node */
import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

const resolve = (str: string) => path.resolve(__dirname, str)

export default defineConfig({
  plugins: [
    Vue(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],

      dts: 'src/auto-imports.d.ts',
    }),
  ],

  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
})
