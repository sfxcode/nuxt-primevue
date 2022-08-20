import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponent, addPluginTemplate } from '@nuxt/kit'
import type { PrimeVueConfiguration } from './types'

export { PrimeVueConfiguration }
export interface ModuleOptions {
  addPlugin: boolean
  config: PrimeVueConfiguration
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-primevue',
    configKey: 'primevue'
  },
  defaults: {
    addPlugin: true,
    config: {
      ripple: true
    }
  },
  setup (moduleOptions, nuxt) {
    if (moduleOptions.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPluginTemplate({
        src: resolve(runtimeDir, 'plugin.ts'),
        filename: 'plugin.ts',
        options: {
          value: JSON.stringify(moduleOptions.config)
        }
      })

      nuxt.hook('autoImports:dirs', (dirs) => {
        dirs.push(resolve(runtimeDir, 'composables'))
      })

      addComponent({ name: 'PrimeDemoToast', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoToast.vue') })
      addComponent({ name: 'PrimeDemoForm', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoForm.vue') })
    }
  }
})
