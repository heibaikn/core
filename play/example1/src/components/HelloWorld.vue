<script setup lang="ts">
import { nextTick, ref, reactive } from 'vue'
import MsgTxt from './Msg.vue';
const self = reactive({
  age: "73",
  name: "Trump"
})
defineProps<{ msg: string }>()

const count = ref(0)
async function increment() {
  count.value++
  count.value++
  count.value++
  count.value++
  for (let i = 0; i < 1000; i++) {
    count.value++
  }
  self.name = "Biden"
  self.age = "81"
  // DOM not yet updated
  console.log('before nextTick', document.getElementById('counter')!.textContent) // 0

  await nextTick(() => {
    debugger
    console.log("in nextTick callback", document.getElementById('counter')!.textContent);
  })
  debugger
  // DOM is now updated
  console.log('after nextTick', document.getElementById('counter')!.textContent) // 1
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <MsgTxt :msg="count" />
  <div>{{ self }}</div>
  <div class="card">
    <button id="counter" type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local"
       target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
