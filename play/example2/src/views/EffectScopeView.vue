<template>
  <div>
    <button @click="runEffectScope"> 开始监听 </button>
    <button @click="changeTargetValue"> 修改 </button>
    <button @click="stopEffectScope"> 停止监听 </button>
  </div>
  <div>
    scope.activex :{{ scope.active }}<br />
    target-value: {{ counter }} <br />
    scopeValue: {{ scopeValue?.doubled.value }}
  </div>
</template>

<script setup lang="ts">
import scopeValue, { scope, counter, runEffectScope, stopEffectScope, changeTargetValue } from '@/utils/effect';

</script>

<style lang="scss" scoped>

</style>