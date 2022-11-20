# About Formkit Integration


## Supported Inputs

Inputs are used in schema with **prime** as prefix and the **input name** as suffix.

::: warning
Used inputs must be imported global (default), because of using in the startup phase.
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
