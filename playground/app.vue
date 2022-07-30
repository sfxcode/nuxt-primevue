<script setup lang="ts">

import PrimeDemoDataTable from "~/components/PrimeDemoDataTable.vue";
</script>

<template>
  <div class="m-6 card">
    <div class="flex flex-row flex-wrap gap-4">
      <div class="basis-1/2">
        <div><PrimeDemoToast/></div>
        <div><PrimeDemoDataTable/></div>

      </div>
      <div class="basis-1/4"><PrimeDemoForm/></div>
    </div>

  </div>

</template>

<style scoped></style>
