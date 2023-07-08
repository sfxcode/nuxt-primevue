# About Formkit Integration

FormKit equips developers to build their forms 10x faster by simplifying form structure, generation, validation, theming, submission, error handling, and more.

In combination with PrimeVue it is an excellent choice for form validation.
## Formkit - Primevue

Helper classes for using [Formkit](https://formkit.com/) with the [PrimeVue UI Framework](https://www.primefaces.org/primevue/#/)

### Usages

A Nuxt 3 Module (PrimeVue and Formkit bundled) under [nuxt-primevue](https://github.com/sfxcode/nuxt-primevue)

[Nuxt 3 PrimeVue Starter](https://github.com/sfxcode/nuxt3-primevue-starter) and [Vite PrimeVue Starter](https://github.com/sfxcode/vite-primevue-starter) with Formkit support available


## Supported Inputs

Inputs are used in schema with **prime** as prefix and the **input name** as suffix.

::: warning
Used inputs by FormKit must be imported global (default).

They are referenced in the startup phase, if FormKit is enabled.
:::


E.g. InputMask -> primeInputMask

- Calendar
- Checkbox
- Dropdown
- Editor (HTML Editor)
- InputMask
- InputNumber
- InputSwitch
- InputText
- InputTextarea
- MultiSelect
- Password
- Ranking
- Chips
- Knob
- ColorPicker
- Listbox
- ToggleButton
- SelectButton
- TriStateCheckbox
- RadioButton

## Formkit Usage Demo

```ts

const schema
  = [
  {
    $formkit: 'primeInputMask',
    name: 'myInputMask',
    label: 'Input Mask',
    validation: 'required',
    validationVisibility: 'live',
    mask: '99-999999',
    placeholder: '99-999999',
  },
  {
    $formkit: 'primeInputMask',
    name: 'custom',
    label: 'Input Mask',
    mask: '(999) 999-9999',
    unmask: true,
  },
]
const data = { }
```

```vue
<template>
      <FormKit
        id="form"
        v-model="data"
        type="form"
        :submit-attrs="{
          inputClass: 'p-button p-component',
        }"
        @submit="submitHandler"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
</template>
```
