<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col col-md-8 mx-auto">
        <div class="card border-primary mb-3">
          <div class="card-header">LOG INTO YOUR ACCOUNT</div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="e.g. you@example.com"
                  :class="{ error: $v.email.$error || error }"
                  v-on="$listeners"
                  v-model="email"
                  @blur="$v.email.$touch()"
                />
                <template v-if="$v.email.$error">
                  <small
                    v-if="!$v.email.required || $v.email.$error"
                    class="form-text text-danger"
                    >Please input valid email</small
                  >
                </template>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  :class="{ error: $v.password.$error || error }"
                  v-on="$listeners"
                  v-model="password"
                  @blur="$v.password.$touch()"
                />
                <template v-if="$v.password.$error">
                  <small
                    v-if="!$v.password.required"
                    class="form-text text-danger "
                    >Please input valid password</small
                  >
                </template>
              </div>
              <template v-if="error">
                <small v-if="error" class="form-text text-danger mb-3">{{
                  error
                }}</small>
              </template>
              <button type="submit" class="btn btn-primary">
                <span
                  class="spinner-border spinner-border-sm"
                  v-if="loading"
                ></span>
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      userForm: {},
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.userForm = {
          email: this.email,
          password: this.password
        }
        return this.$store.dispatch('login', this.userForm)
      }
    }
  },
  computed: mapState(['loading', 'error'])
}
</script>

<style scoped>
.error {
  border-color: red;
}
</style>
