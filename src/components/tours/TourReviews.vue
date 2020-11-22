<template>
  <div class="row ml-2">
    <div class="col-md-10 mt-5 mx-auto text-center">
      <div class="row scrolling-wrapper-flexbox scrolling-wrapper">
        <div v-for="rev in tour" :key="rev._id" class="col col-md-4 mb-5">
          <div
            class="card card-cascade wider border border-success"
            style="max-width: 30rem"
          >
            <div class="card-body card-body-cascade text-center">
              <h4 class="card-title">
                <img
                  class="rounded-circle ml-4 mr-3"
                  :alt="rev.user.name"
                  :src="
                    'https://calm-ocean-73108.herokuapp.com/img/users/' +
                      rev.user.photo
                  "
                  data-holder-rendered="true"
                  style="height: 3rem"
                />
                <strong>{{ rev.user.name }}</strong>
              </h4>
              <h5 class="blue-text pb-2">
                <small>
                  {{ rev.review }}
                </small>
              </h5>
            </div>
            <div class="card-footer">
              <star-rating
                style="width: 8rem;"
                class="mx-auto"
                :read-only="true"
                :round-start-rating="false"
                :rating="rev.rating"
                active-color="#78C2AD"
                :star-size="20"
              ></star-rating>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  props: ['tour'],
  components: {
    StarRating
  }
}
</script>

<style scoped>
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
}
.card {
  flex: 0 0 auto;
}
</style>
