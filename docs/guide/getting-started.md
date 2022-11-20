Getting Started

## Installation steps

### Step. 1: Install depenendencies

Create and change into a new directory.

```sh
$ pnpm add -D @sfxcode/nuxt-primevue
```

### Step. 2: Define nuxt modules (nuxt.config.ts)

Add nuxt-formkit (optional) and nuxt-primevue to your modules

```ts
  modules: [
  '@formkit/nuxt',
  '@sfxcode/nuxt-primevue',
  ]
```

### Step. 3: Configure nuxt-primevue (nuxt.config.ts, optional)

```ts
  primevue: {
    config: {
      ripple: true
    }
  }
```

### Step. 4: Add PrimeVue specific CSS 

Example below add required primevue css, primeicons and one of the primevue themes (here: saga-blue).

Base scss files for formkit can be imported from formkit-primevue.

```ts
  css: [
    'primevue/resources/primevue.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
  ]
```

### Step. 5: Add primevue to build / transpile (nuxt.config.ts)

```ts
  build: {
    transpile: ['primevue']
  }
```

## Available PrimeVue Elements

Following **directives** are automatically enabled by this module:

* badge
* focustrap
* ripple
* styleclass
* tooltip


Following **services** are automatically enabled by this module:

* ConfirmationService
* ToastService

**Components** are available based on your module configuration.

## Usage in Application

::: info
PrimeVue Toast and Button should be autoimported (like in defaults).
:::

```vue
<script setup lang="ts">
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 })
}

</script>

<template>
  <div class="card">
    <h2>PrimeVue Toast Demo</h2>

    <div>
      <Toast />
      <div>
        <Button label="Success" class="p-button-success" @click="showSuccess" />
      </div>
    </div>
  </div>

</template>

```
