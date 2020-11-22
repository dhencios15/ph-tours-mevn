<template>
  <div class="row mt-5 ">
    <div class="col col-md-1"></div>
    <div class="col-md-4">
      <div class="list-group">
        <h3 href="#" class="list-group-item list-group-item-action active">
          QUICK FACTS
        </h3>
        <li
          class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
        >
          NEXT DATE
          <span class="font-weight-normal">{{
            tour.startDates[0] | dateFormat
          }}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
        >
          DIFFICULTY
          <span class="font-weight-normal">{{
            tour.difficulty.toUpperCase()
          }}</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
        >
          PARTICIPANTS
          <span class="font-weight-normal">{{ tour.maxGroupSize }} People</span>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
        >
          RATING
          <span class="font-weight-normal">{{ tour.ratingsAverage }} / 5</span>
        </li>
      </div>
      <div class="list-group mt-5">
        <h3 href="#" class="list-group-item list-group-item-action active">
          YOUR TOUR GUIDES
        </h3>
        <li
          v-for="guides in tour.guides"
          :key="guides._id"
          class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
        >
          <div>
            <img
              class="rounded-circle ml-4 mr-3"
              :alt="guides.name"
              :src="
                'https://calm-ocean-73108.herokuapp.com/img/users/' +
                  guides.photo
              "
              data-holder-rendered="true"
              style="height: 3rem"
            />
            <span>{{
              guides.role === 'lead-guide' ? 'LEAD GUIDE' : 'TOUR GUIDE'
            }}</span>
          </div>
          <span class="font-weight-normal mr-4 mb-2">{{ guides.name }}</span>
        </li>
      </div>
    </div>
    <div class="col-md-6">
      <div class="list-group border border-primary">
        <h3 href="#" class="list-group-item list-group-item-action active">
          ABOUT THE {{ tour.name.toUpperCase() }}
        </h3>
        <p class="ml-3 mt-2 mr-3 indent-description">
          {{ tour.description }}
        </p>
      </div>
    </div>
    <div class="col col-md-1"></div>
  </div>
</template>

<script>
export default {
  props: ['tour'],
  filters: {
    dateFormat: value => {
      let newDate = new Date(value)
      var month = newDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
      return month
    }
  }
}
</script>

<style lang="scss" scoped></style>
