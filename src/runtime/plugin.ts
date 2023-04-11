import PrimeVue from 'primevue/config'

// directives
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import Tooltip from 'primevue/tooltip'
import FocusTrap from 'primevue/focustrap'

// services
import { defineNuxtPlugin } from '#app'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

import { useRuntimeConfig } from 'nuxt/app'
import { PrimeVueConfiguration } from './primevueConfig'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  let primevueConfig: PrimeVueConfiguration = {}

  const runtimeConfig = useRuntimeConfig()
  const moduleConfig: PrimeVueConfiguration = runtimeConfig.public.primevue?.config

  if (moduleConfig) {
    primevueConfig = moduleConfig
  }

  app.use(PrimeVue, primevueConfig)

  // directives
  app.directive('badge', BadgeDirective)
  app.directive('ripple', Ripple)
  app.directive('tooltip', Tooltip)
  app.directive('styleclass', StyleClass)
  app.directive('focustrap', FocusTrap)
  // services
  app.use(ConfirmationService)
  app.use(ToastService)
})
