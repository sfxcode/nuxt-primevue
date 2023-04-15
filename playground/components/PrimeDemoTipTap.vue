<script setup lang="ts">
import { Ref } from 'vue'

const startText = '<p>I’m running Tiptap with Vue.js and Nuxt. 🎉</p>'
const editorValue:Ref<string> = ref(startText)

</script>

<template>
  <div>
    <h2>PrimeVue Demo TipTap</h2>
    <PrimeTipTap v-model="editorValue" :toolbar-visible="true" />
  </div>
</template>

<style scoped></style>
