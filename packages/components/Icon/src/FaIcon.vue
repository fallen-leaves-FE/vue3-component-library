<template>
  <i
    class="fa-icon"
    :class="props.name"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>
