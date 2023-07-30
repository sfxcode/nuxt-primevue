<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref, reactive } from 'vue'

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' }
]

const schema = reactive(
  [
    {
      $el: 'h1',
      children: ['Validation with FormKit']
    },
    {
      $el: 'h3',
      children: ['Inputs from PrimeVue']
    },
    {
      $el: 'h3',
      children: ['Validation by FormKit']
    },
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email'

    },
    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      rows: '5'
    },
    {
      $formkit: 'primeCalendar',
      name: 'myCalendar',
      label: 'Calendar',
      validation: '',
      showIcon: true

    },
    {
      $formkit: 'primeInputText',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16'
    },
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      toggleMask: true,
      feedback: false,
      help: 'Enter your new password again to confirm it.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation'
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      label: 'Are you a european citizen?'

    },
    {
      $formkit: 'primeDropdown',
      if: '$eu_citizen', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      value: 'hourly',
      showClear: false,
      filter: false,
      options,
      help: 'How often should we display a cookie notice?',
      class: 'test'

    },
    {
      $formkit: 'primeSlider',
      name: 'slider',
      label: 'Max messages',
      min: 5,
      step: 5,
      value: 10
    },
    {
      $formkit: 'primeChips',
      name: 'chips',
      label: 'Use Chips'
    },
    {
      $formkit: 'primeKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50
    }
  ]
)

const data = ref({})

const submitHandler = async () => {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div>
    <span class="p-21" />
    <div class="myFormkit">
      <FormKit
        id="form"
        v-model="data"
        type="form"
        :submit-attrs="{
          inputClass: 'p-button p-component',
          wrapperClass: '',
          outerClass: ''
        }"
        @submit="submitHandler"
      >
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>
    </div>
    <h4>Data</h4>
    <pre>{{ data }}</pre>
  </div>
</template>
