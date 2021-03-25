<template>
  <div class="home">
    <div>登陆者：{{ user.username }}</div>
    <div>头像：<img :src="user.image" /></div>
    <img alt="Vue logo" src="../common/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore(key)
    return {
      user: {
        ...store.state.user
      }
    }
  }
})
</script>
