<template>
  <div class="col-md-3 border border-primary">
    <ul class="list-group mt-5" v-if="!isAdmin(userRole)">
      <router-link
        v-for="route in routerData"
        :key="route.name"
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        :to="route.routeTo"
        @click.native="routeClick(route.value)"
      >
        {{ route.name }}
      </router-link>
    </ul>
    <ul class="list-group mt-5" v-if="isAdmin(userRole)">
      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        to="/user/settings"
        @click.native="routeClick('settings')"
      >
        SETTINGS
      </router-link>
      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        to="/user/tours"
        @click.native="routeClick('tours')"
      >
        TOURS
      </router-link>
      <router-link
        tag="li"
        class="list-group-item d-flex justify-content-between align-items-center"
        to="/user/list-of-users"
        @click.native="routeClick('list-of-users')"
      >
        USERS
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['userRole'],
  data() {
    return {
      routerData: [
        {
          name: 'SETTINGS',
          routeTo: '/user/settings',
          value: 'settings'
        },
        {
          name: 'MY BOOKINGS',
          routeTo: '/user/bookings',
          value: 'bookings'
        },
        {
          name: 'MY REVIEWS',
          routeTo: '/user/reviews',
          value: 'reviews'
        },
        {
          name: 'BILLINGS',
          routeTo: '/user/billings',
          value: 'billings'
        }
      ]
    }
  },
  methods: {
    routeClick(route) {
      this.$emit('clickedRoute', route)
    },
    isAdmin(role) {
      return role === 'admin' ? true : false
    }
  }
}
</script>

<style scoped>
li:hover,
li.router-link-active,
li.router-link-exact-active {
  /* background-color: indianred; */
  border-left: 3px solid green;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1rem;
}
</style>
