import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import Vue from 'vue'

const state = {
  token: getToken(),
  name: '', // 用户名
  avatar: '',
  userInfo: {},
  firstName:"",
  permission: false,
  spinShow: false
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_INFO: (state, info) => {
    state.userInfo = info;
  },
  SET_FIRST_NAME: (state, firstName) => {
    state.firstName = firstName;
  },
  REMOVE_TOKEN: (state) => {
    state.token = '';
  },
  SET_PERMISSION: (permission) => {
    state.permission = permission;
  },
  SET_SPIN_SHOW: (state, spinShow) => {
    state.spinShow = spinShow
  }
}

const actions = {
  keycloakLogin({ commit }, accessToken) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', accessToken)
      setToken(accessToken)
      resolve()
    })
  },
  refreshedToken({ commit }, accessToken) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', accessToken)
      setToken(accessToken)
      resolve()
    })
  },
  getKeycloakInfo({ commit, state }) {
  },
  keycloakLogout({ commit, state }) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$keycloak.logout().then(() => {
        console.log('退出系统')
        removeToken() // must remove  token  first
        resetRouter()
        commit('REMOVE_TOKEN')
        commit('RESET_STATE');
        // debugger
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

