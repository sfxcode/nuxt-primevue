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

### Step 6 (only for usage of Formkit with PrimeVue)

Add formkit.config.ts to your root dir and register primeInputs.

<<< @/../playground/formkit.config.ts

## Test Installation

This module contains some demo components to make sure everything work as expected.

### PrimeDemoToast

Makes sure PrimeVue Services and Components are available.

```vue
<PrimeDemoToast/>
```

### PrimeDemoForm

Makes sure Formkit by PrimeVue Input components and validation are available.

```vue
<PrimeDemoForm/>
```
