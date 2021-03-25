<template>
  <div class="container">
    <div class="main-container">
      <div class="header">PPAP</div>
      <div class="main">
        <div class="account">
          <img src="~@/common/img/email.png" alt="">
          <input type="text" v-model="user.email" @keyup.enter="handleLogin" placeholder="请输入邮箱" />
        </div>
        <div class="password">
          <img src="~@/common/img/password.png" alt="">
          <input type="password" v-model="user.password" @keyup.enter="handleLogin" placeholder="请输入密码" />
        </div>
        <div class="login">
          <div @click="handleLogin">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { login } from '@/api/user'

function useLogin () {
  const store = useStore(key)
  const user = reactive({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      const res = await login({
        user
      })
      console.log(res.data.user)
      // 将数据存到 store 中
      store.commit('setUser', res.data.user)
    } catch (error) {
      console.log('登录错误', error)
    }
  }

  return {
    user,
    handleLogin
  }
}

export default defineComponent({
  name: 'Login',
  setup () {
    const data = useLogin()
    return {
      ...data
    }
  }
})
</script>

<style scoped lang="stylus">
.container {
  padding 50px
  background-color #ececec
  display flex
  flex-direction column
  align-items center
  justify-content center

  .main-container {
    position relative
    border-radius 5px
    margin-bottom 150px
    padding 20px 20px
    background-color rgba(255,255,255,0.95)

    .close-btn {
      width 20px
      height 20px
      position absolute
      top 15px
      right 15px
      cursor pointer
      transition all .2s linear

      &:hover {
        transform rotate(180deg)
      }
    }

    .header {
      width 320px
      padding 15px 20px
      font-weight bold
      font-size 26px
      color #FFD100
    }

    .main {
      width 320px
      padding 0 20px 15px 20px

      .account {
        display flex
        align-items center
        justify-content center
        padding 10px 0
        margin auto
        border-bottom 1px dashed #cdcdcd

        img {
          height 30px
          width 30px
        }

        input {
          width 220px
          padding 8px 10px
          color #515151
          font-size 14px
          background none
        }
      }

      .password {
        display flex
        align-items center
        justify-content center
        padding 10px 0
        margin auto
        border-bottom 1px dashed #cdcdcd

        img {
          height 30px
          width 30px
        }

        input {
          width 220px
          padding 8px 10px
          color #515151
          font-size 14px
          background none
        }
      }
    }

    .login {
      div {
        width 300px
        margin 30px auto 8px
        color #313131
        font-size 22px
        padding 10px 10px
        border-radius 32px
        background-color #FFD100
        cursor pointer
        transition all .1s linear

        &:hover {
          box-shadow 0 0 8px #bbb
          opacity 0.8
        }
      }
    }

  }

  @media screen and (max-width : 500px) {
    .main-container {
      padding 0
    }
  }
}
</style>
