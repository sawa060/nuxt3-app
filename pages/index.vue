<template>
  <div>
    <q-btn :label="samplelabel" />
    <q-input filled v-model="sampleText" />
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';

const samplelabel = "nuxt3";
const sampleText= ref<String>("hello nuxt3");
</script>
