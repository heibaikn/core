import { computed, effectScope, ref, watch, watchEffect } from 'vue'

export const scope = effectScope()
export const counter = ref(1)
let setupStore: any
const scopeFunc = () => {
  setupStore = scope.run(() => {
    const doubled = computed(() => counter.value * 2)
    watch(doubled, () => console.log('doubled', doubled.value))
    watchEffect(() => console.log('count:', doubled.value))
    return {
      doubled
    }
  })
}
scopeFunc()
export const changeTargetValue = () => {
  counter.value++
  console.log(setupStore.doubled.value)
}
export const runEffectScope = () => {
  // setupStore = scope.run(scopeFunc)
  scopeFunc()
}
export const stopEffectScope = () => {
  scope.stop()
  console.log(setupStore)
}
export default setupStore
