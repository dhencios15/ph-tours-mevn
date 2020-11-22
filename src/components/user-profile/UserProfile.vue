<template>
  <div class="row mt-5">
    <div class="col-md-7 mx-auto shadow">
      <div class="row h-100 ">
        <side-bar @clickedRoute="changeRoute" :userRole="user.role" />
        <user-settings v-if="route === 'settings'" :user="user" />
        <user-bookings v-if="route === 'bookings'" :user="user" />
        <user-reviews v-if="route === 'reviews'" :user="user" />
        <user-billings v-if="route === 'billings'" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      route: 'settings'
    }
  },
  components: {
    'side-bar': require('./UserSideBar').default,
    'user-settings': require('./UserSettings').default,
    'user-bookings': require('./users/UserBookings').default,
    'user-reviews': require('./users/UserReview').default,
    'user-billings': require('./users/UserBillings').default
  },
  computed: mapState(['user']),
  methods: {
    changeRoute(value) {
      this.route = value
    }
  }
}
</script>
