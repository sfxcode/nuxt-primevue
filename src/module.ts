import { resolve } from 'path'
import { fileURLToPath } from 'url'
import {defineNuxtModule, addPlugin, addComponent, addImportsDir} from '@nuxt/kit'
import type { PrimeVueConfiguration } from './types'
import defu from 'defu'

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
      nuxt.options.runtimeConfig.public.primevue = defu(nuxt.options.runtimeConfig.public.primevue,
        {
          config: moduleOptions.config,
        },
      )

      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)

      addPlugin({
        src: resolve(runtimeDir, 'plugin')
      })


      addImportsDir(resolve(runtimeDir, 'composables'))

      addComponent({ name: 'PrimeDemoToast', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoToast.vue') })
      addComponent({ name: 'PrimeDemoForm', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoForm.vue') })


    }
  }
})
