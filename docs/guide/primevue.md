# About PrimeVue Integration

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
