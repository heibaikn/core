import { ref } from 'vue'

// 在根组件中创建状态
const count = ref(0)
// 一个简单的 useCounter 钩子示例
function useCounter() {
  // const count = ref(0); // 使用 ref 创建一个响应式数据
  const increment = () => {
    count.value++
  }

  return {
    count, // 将 count 暴露出去
    increment // 将 increment 方法暴露出去
  }
}

export default useCounter
