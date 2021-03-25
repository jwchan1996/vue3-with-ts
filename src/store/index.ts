import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

interface User {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: string
}

// define your typings for the store state
export interface State {
  user: User
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    user: {
      email: '',
      token: '',
      username: '',
      bio: '',
      image: ''
    }
  },
  mutations: {
    setUser (state, user: User) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
