<template>
  <div class="row ml-1">
    <div class="col col-md-10 mx-auto">
      <div
        class="jumbotron text-center border-top border-bottom border-primary "
      >
        <h1 class="display-5 text-primary">WHAT ARE YOU WAITING FOR?</h1>
        <p class="lead">
          {{ tour.duration }} days, 1 adventure, infinite memories. Make it
          yours today!
        </p>
        <hr class="my-4" />
        <p class="lead">
          <router-link
            v-if="$store.state.isLoggedIn"
            class="btn btn-primary btn-lg"
            to="#"
            role="button"
            @click.native="bookTour(tour._id)"
          >
            BOOK TOUR NOW!
          </router-link>
          <router-link
            v-else
            class="btn btn-primary btn-lg"
            :to="{ name: 'UserLogin' }"
            role="button"
            >LOG IN TO BOOK TOUR!</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BookingService from '../../services/BookingService'
export default {
  props: ['tour'],
  methods: {
    async bookTour(tourId) {
      try {
        const { session } = (await BookingService.BOOK_TOUR(tourId)).data
        console.log(session.id)
      } catch (error) {
        console.log(error.session)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
