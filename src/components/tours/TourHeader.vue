<template>
  <header
    class="masthead"
    :style="{
      'background-image':
        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' +
        'https://calm-ocean-73108.herokuapp.com/img/tours/' +
        tour.imageCover +
        ')'
    }"
  >
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <h1 class="font-weight-light text-white">
            {{ tour.name }}
          </h1>
          <p class="lead text-light">
            {{ tour.duration }} DAYS -
            {{ tour.startLocation.description.toUpperCase() }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    tour: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.masthead {
  height: 50vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
