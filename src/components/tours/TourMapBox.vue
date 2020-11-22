<template>
  <div class="row ml-1">
    <div class="col-md-10 mx-auto text-center">
      <div style="height: 350px; ">
        <l-map
          style="height: 350px"
          :zoom="zoom"
          :center="
            mapCenter(
              tour.startLocation.coordinates[1],
              tour.startLocation.coordinates[0]
            )
          "
          :disableScrollPropagation="disableScrollPropagation"
        >
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker
            v-for="(loc, index) in tour.locations"
            :key="index"
            :name="loc.description"
            :lat-lng="[loc.coordinates[1], loc.coordinates[0]]"
          >
            <l-tooltip
              :content="dayAndLocation(loc.day, loc.description)"
            ></l-tooltip>
          </l-marker>
          <!-- <l-marker :lat-lng="[24.909047, -80.647885]"> </l-marker>
            <l-marker :lat-lng="[24.707496, -81.0784]"> </l-marker> -->
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet'

export default {
  props: ['tour'],
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 4,
      center: [25.774772, -80.185942],
      disableScrollPropagation: true
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  methods: {
    mapCenter(lat, long) {
      return [lat, long]
    },
    dayAndLocation(day, location) {
      return `Day ${day}: ${location}`
    }
  }
}
</script>
