import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addComponent, addImportsDir, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import { consola } from 'consola'
import { PrimeVueConfiguration } from 'primevue/config'
import { name, version } from '../package.json'

import {
  defaultPrimevueComponentNames,
  defaultPrimeVueComponents,
  defaultPrimevueExcludeComponentNames,
  PrimeVueComponent
} from './runtime/primevueComponents'

// #region options
export interface ModuleOptions {
  config: PrimeVueConfiguration
  components?: {
    include?: Array<PrimeVueComponent | string>
    exclude?: Array<string>
    force?: Array<PrimeVueComponent | string>
  }
  useFormkit: boolean
  quiet: boolean
  includeDemo: boolean
}

// #endregion options

async function registerComponent (component: PrimeVueComponent, registeredNames: string[]) {
  if (!registeredNames.includes(component.name)) {
    await addComponent({
      export: 'default',
      filePath: `primevue/${component.name.toLowerCase()}`,
      global: component.global,
      name: component.name
    })
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'primevue',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    config: {
      ripple: true
    },
    useFormkit: true,
    quiet: false,
    includeDemo: true
  },
  async setup (moduleOptions, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.runtimeConfig.public.primevue = defu(nuxt.options.runtimeConfig.public.primevue,
      {
        config: moduleOptions.config
      }
    )
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('primevue')

    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/plugin'))

    async function addComponents (components: Array<PrimeVueComponent | string>) {
      for (const value of components) {
        if (typeof value === 'string') {
          const component = {} as PrimeVueComponent
          component.name = value
          component.global = false
          await registerComponent(component, registeredNames)
          registeredNames = [...registeredNames, value]
        } else {
          const component = value as PrimeVueComponent
          await registerComponent(component, registeredNames)
          registeredNames = [...registeredNames, component.name]
        }
      }
    }

    let registeredNames: string[] = []
    if (moduleOptions.components?.include && moduleOptions.components?.include.length > 0) {
      await addComponents(moduleOptions.components?.include)
    } else {
      for (const component of defaultPrimeVueComponents(moduleOptions.useFormkit)) {
        if (!moduleOptions.components?.exclude || !moduleOptions.components?.exclude.includes(component.name)) {
          if (!defaultPrimevueExcludeComponentNames.includes(component.name)) {
            await registerComponent(component, registeredNames)
            registeredNames = [...registeredNames, component.name]
          }
        }
      }
    }
    if (moduleOptions.components?.force) { await addComponents(moduleOptions.components?.force) }

    if (!moduleOptions.quiet) {
      consola.info('[@sfxcode/nuxt-primevue] ' + registeredNames.length + ' of ' + (defaultPrimevueComponentNames.length + defaultPrimevueExcludeComponentNames.length) + ' PrimeVue Components added, finetetuning if needed by components configuration in module options')
    }
    // consola.info(registeredNames)

    addImportsDir(resolve(runtimeDir, 'composables'))

    if (moduleOptions.includeDemo) {
      await addComponent({ name: 'PrimeDemoToast', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoToast.vue') })
      await addComponent({ name: 'PrimeDemoForm', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoForm.vue') })
    }

    if (!moduleOptions.quiet) {
      consola.success('[@sfxcode/nuxt-primevue] loaded')
    }
  }
})
