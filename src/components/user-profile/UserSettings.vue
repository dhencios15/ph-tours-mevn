<template>
  <div class="col-md-9 ">
    <div class="mx-auto mt-5" style="width: 30rem">
      <div>
        <h4 class="text-primary">YOUR ACCOUNT SETTINGS</h4>
        <form @submit.prevent="updateUser">
          <div class="form-group mt-3">
            <label><b>Name</b></label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <label><b>Email address</b></label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group d-block">
            <img
              class="rounded-circle mb-2"
              :alt="user.name"
              :src="
                'https://calm-ocean-73108.herokuapp.com/img/users/' + user.photo
              "
              data-holder-rendered="true"
              style="height: 4rem"
            />
            <input
              style="width: 20rem"
              type="file"
              accept="image/*"
              class="form-control-file"
              aria-describedby="fileHelp"
              ref="file"
              @change="handleFileUpload()"
            />
          </div>
          <button type="submit" class="btn btn-primary d-flex ml-auto">
            <span
              class="spinner-border spinner-border-sm"
              v-if="loading"
            ></span>
            SAVE SETTINGS
          </button>
        </form>
      </div>
      <div class="mt-5 mb-5 border-top border-dark">
        <h4 class="text-primary mt-3">PASSWORD CHANGE</h4>
        <form @submit.prevent="updatePassword">
          <div class="form-group mt-3">
            <label><b>Current Password</b></label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="********"
            />
          </div>
          <div class="form-group">
            <label><b>New Password</b></label>
            <input
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="********"
            />
          </div>
          <div class="form-group">
            <label><b>Confirm Password</b></label>
            <input
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="********"
            />
          </div>
          <button type="submit" class="btn btn-primary d-flex ml-auto">
            SAVE PASSWORD
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['user'],
  data() {
    return {
      name: this.user.name,
      email: this.user.email
    }
  },
  methods: {
    updateUser() {
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('photo', this.photo)
      return this.$store.dispatch('updateUser', formData)
    },
    updatePassword() {
      console.log('password changed')
    },
    handleFileUpload() {
      this.photo = this.$refs.file.files[0]
    }
  },
  computed: mapState(['loading'])
}
</script>
