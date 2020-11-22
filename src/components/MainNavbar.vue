<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Tours</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"></li>
      </ul>
      <form v-if="!$store.state.isLoggedIn" class="form-inline my-2 my-lg-0">
        <router-link
          :to="{ name: 'UserLogin' }"
          class="btn btn-primary my-2 my-sm-0 mr-2"
          @click.native="clearError"
        >
          LOG IN
        </router-link>
        <router-link
          :to="{ name: 'UserRegister' }"
          class="btn btn-secondary my-2 my-sm-0"
          @click.native="clearError"
        >
          SIGN UP
        </router-link>
      </form>
      <form v-else class="form-inline my-2 my-lg-0">
        <router-link to="/user/settings" class="btn btn-primary my-2 my-sm-0">
          <img
            class="rounded-circle mr-1"
            :alt="user.name"
            :src="
              'https://calm-ocean-73108.herokuapp.com/img/users/' + user.photo
            "
            data-holder-rendered="true"
            style="height: 2rem"
          />
          {{ firstName(user.name) }}
        </router-link>
        <router-link
          to="/"
          class="btn btn-primary my-2 my-sm-0"
          @click.native="logout"
        >
          LOG OUT
        </router-link>
      </form>
    </div>
  </nav>
</template>

<script>
import cookies from 'vue-cookies'
import { mapState } from 'vuex'

export default {
  methods: {
    logout() {
      cookies.remove('jwt')
      this.$store.commit('SET_USER', null)
      this.$store.commit('IS_USER_LOGIN', false)
      this.$router.push('/#')
    },
    firstName(name) {
      return name.split(' ')[0].toUpperCase()
    },
    clearError() {
      this.$store.commit('SET_ERROR', null)
    }
  },
  computed: mapState(['user', 'error'])
}
</script>
