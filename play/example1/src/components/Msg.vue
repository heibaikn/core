<template>
  <div>
    {{ msg }} / {{self.num}}
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue';


const props = defineProps(["msg"])
const self = reactive({
  num: 1
})
watch(() => props.msg, () => {
  self.num++
})
</script>

<style lang="scss" scoped>

</style>