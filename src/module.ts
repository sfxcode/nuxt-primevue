import { resolve } from 'path'
import { fileURLToPath } from 'url'
import {defineNuxtModule, addPlugin, addComponent} from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-primevue',
    configKey: 'primevue'
  },
  defaults: {
    addPlugin: true
  },
  setup(moduleOptions, nuxt) {
    if (moduleOptions.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))

      addComponent({ name: "PrimeDemoToast", filePath: resolve(runtimeDir, 'components/demo/PrimeDemoToast.vue') })
      addComponent({ name: "PrimeDemoForm", filePath: resolve(runtimeDir, 'components/demo/PrimeDemoForm.vue') })

    }
  }
})
