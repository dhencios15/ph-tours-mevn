<template>
  <div class="row mt-5 ml-1">
    <div class="col-sm-10 mx-auto text-center">
      <img
        v-for="(image, index) in tour"
        :key="index"
        alt="picture"
        :src="'https://calm-ocean-73108.herokuapp.com/img/tours/' + image"
        class="img-fluid"
        style="height: 20rem; width: 35.7rem"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['tour']
}
</script>

<style lang="scss" scoped></style>
