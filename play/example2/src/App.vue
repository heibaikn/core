

<template>
  <header>
    <div class="wrapper">
      <template v-for="(page, i) in pages" :key="page.name">
        <router-link :to="page" v-slot="{ route }">{{
            page.label
        }}</router-link>
      </template>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const router = useRouter()
const route = useRoute()
const pages = router
  .getRoutes()
  .filter((route) => !route.meta.hide)
  .map((route) => {
    return {
      name: route.name,
      label: route.meta.label || route.name
    }
  })
</script>

<style scoped lang="scss">
.wrapper {
  a {
    padding:0 4px;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
