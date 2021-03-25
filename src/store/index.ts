import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

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
