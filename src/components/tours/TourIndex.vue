<template>
  <div>
    <tour-header :tour="tour" />
    <tour-description :tour="tour" />
    <tour-images :tour="tour.images" />
    <tour-mapbox :tour="tour" />
    <tour-reviews :tour="tour.reviews" />
    <tour-book :tour="tour" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('tours', ['tour'])
  },
  components: {
    'tour-header': require('./TourHeader').default,
    'tour-description': require('./TourDescriptions').default,
    'tour-images': require('./TourImages').default,
    'tour-mapbox': require('./TourMapBox').default,
    'tour-reviews': require('./TourReviews').default,
    'tour-book': require('./TourBook').default
  }
}
</script>
