<template>
  <div>
    {{ count }}
    <button @click="increment">点击+1</button>
  </div>
</template>

<script setup lang="ts">
import UseCounter from './../utils/counter';
const { count, increment } = UseCounter()
</script>

<style lang="scss" scoped>

</style>