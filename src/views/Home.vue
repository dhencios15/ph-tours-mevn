<template>
  <div class="container">
    <div class="row mt-3">
      <div v-for="tour in tours" :key="tour._id" class="col col-md-4 mt-3">
        <div class="card card-cascade wider border border-success">
          <!-- Card image -->
          <div class="view view-cascade overlay">
            <img
              class="card-img-top"
              :src="
                'https://calm-ocean-73108.herokuapp.com/img/tours/' +
                  tour.imageCover
              "
              alt="Card image cap"
            />
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!-- Card content -->
          <div class="card-body card-body-cascade text-center">
            <!-- Title -->
            <h4 class="card-title">
              <strong>{{ tour.name }}</strong>
            </h4>
            <!-- Subtitle -->
            <h5 class="blue-text pb-2">
              <small
                ><strong>
                  {{ tour.difficulty.toUpperCase() }} {{ tour.duration }}-DAY
                  TOUR</strong
                ></small
              >
            </h5>
            <!-- Text -->
            <p class="card-text">
              {{ tour.summary }}
            </p>
          </div>
          <div class="card-footer text-muted text-center mt-4">
            <div class="row">
              <div class="col">
                <small>${{ tour.price }} per person</small><br />
                <small>
                  <b>{{ tour.ratingsAverage }}</b> ratings ({{
                    tour.ratingsQuantity
                  }})</small
                >
              </div>
              <div class="col">
                <router-link
                  @click.native="getTour(tour._id)"
                  class="btn btn-primary mt-1 ml-3"
                  :to="{
                    name: 'Tour',
                    params: { slug: tour.slug }
                  }"
                  >DETAILS</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    getTour(tourId) {
      this.$store.dispatch('tours/getTour', tourId)
    }
  },
  created() {
    this.$store.dispatch('tours/getAllTours')
  },
  computed: mapGetters('tours', ['tours'])
}
</script>
