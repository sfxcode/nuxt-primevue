<script setup lang="ts">

import PrimeDemoTipTap from '~/components/PrimeDemoTipTap.vue'
</script>

<template>
  <div class="m-6 card">
    <div class="flex flex-row flex-wrap gap-4">
      <div class="basis-1/2">
        <div><PrimeDemoToast /></div>
        <div><PrimeDemoDataTable /></div>
        <div class="pt-5">
          <PrimeDemoTipTap />
        </div>
      </div>
      <div class="basis-1/4">
        <PrimeDemoForm />
      </div>
    </div>
  </div>
</template>

<style scoped>

body {
  font-size: 14px;
}
</style>
