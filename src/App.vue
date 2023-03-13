<template>
  <VueMultiselect
    :model-value="value"
    :options="source"
    :searchable="false"
    :close-on-select="false"
    :allow-empty="false"
    @update:model-value="updateSelected"
    label="name"
    placeholder="Select one"
    track-by="name"
  />
  <hr style="margin-top: 1rem; margin-bottom: 1rem" />
  <img src="/Screenshot_72.png" />
</template>

<script setup>
import { ref } from "vue";

let value = ref({ name: "option1" });

const source = ref([
  { name: "option1" },
  { name: "option2" },
  { name: "option3" },
]);

function updateSelected(newVal) {
  value.value = newVal;
}
</script>
