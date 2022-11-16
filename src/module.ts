import {resolve} from 'path'
import {fileURLToPath} from 'url'
import {defineNuxtModule, addPlugin, addComponent, addImportsDir} from '@nuxt/kit'
import type {PrimeVueConfiguration} from './types'
import defu from 'defu'
import {
  defaultPrimevueComponentNames,
  defaultPrimeVueComponents,
  defaultPrimevueExcludeComponentNames,
  PrimeVueComponent
} from "./runtime/primevueComponents";
import consola from 'consola'

export {PrimeVueConfiguration}

export interface ModuleOptions {
  addPlugin: boolean
  config: PrimeVueConfiguration
  components?: {
    include?: Array<PrimeVueComponent | string>
    exclude?: Array<string>
    force?: Array<PrimeVueComponent | string>
  }
  useFormkit: boolean
}

async function registerComponent(component: PrimeVueComponent, registeredNames:string[]) {
  if (! registeredNames.includes(component.name)) {
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
    name: 'nuxt-primevue',
    configKey: 'primevue'
  },
  defaults: {
    addPlugin: true,
    config: {
      ripple: true
    },
    useFormkit: true
  },
  async setup(moduleOptions, nuxt) {
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

      async function addComponents(components:Array<PrimeVueComponent | string>)  {
        for (const value of components) {
          if (typeof value === 'string') {
            const component = {} as PrimeVueComponent
            component.name = value
            component.global = false
            await registerComponent(component, registeredNames)
            registeredNames = [...registeredNames, value]
          }
          else {
            const component = value as PrimeVueComponent
            await registerComponent(component,registeredNames)
            registeredNames = [...registeredNames, component.name]
          }
        }
      }

      let registeredNames:string[] = []
      if (moduleOptions.components?.include && moduleOptions.components?.include.length > 0) {
        await addComponents(moduleOptions.components?.include)
      } else {
        for (const component of defaultPrimeVueComponents(moduleOptions.useFormkit)) {
          if (!moduleOptions.components?.exclude || !moduleOptions.components?.exclude.includes(component.name)  ) {
            if (! defaultPrimevueExcludeComponentNames.includes(component.name)) {
              await registerComponent(component, registeredNames)
              registeredNames = [...registeredNames, component.name]
            }
          }
        }
      }
      if (moduleOptions.components?.force)
        await addComponents(moduleOptions.components?.force)

      consola.info('[@sfxcode/nuxt-primevue] ' + registeredNames.length + ' of '+ (defaultPrimevueComponentNames.length + defaultPrimevueExcludeComponentNames.length) + ' PrimeVue Components added, finetetuning if needed by components in module options')
      // consola.info(registeredNames)

      addImportsDir(resolve(runtimeDir, 'composables'))

      addComponent({name: 'PrimeDemoToast', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoToast.vue')})
      addComponent({name: 'PrimeDemoForm', filePath: resolve(runtimeDir, 'components/demo/PrimeDemoForm.vue')})

    }
  }
})
