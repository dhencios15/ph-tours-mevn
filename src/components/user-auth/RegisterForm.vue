<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col col-md-8 mx-auto">
        <div class="card border-primary mb-3">
          <div class="card-header">CREATE YOUR ACCOUNT</div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Your name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  :class="{ error: $v.name.$error || error }"
                  v-on="$listeners"
                  v-model="name"
                  @blur="$v.name.$touch()"
                />
                <template v-if="$v.name.$error">
                  <small v-if="!$v.name.required" class="form-text text-danger"
                    >Please input valid name</small
                  >
                </template>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
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
              <div class="form-group">
                <label for="confirm_password">Confirm assword</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirm_password"
                  :class="{ error: $v.passwordConfirm.$error || error }"
                  v-on="$listeners"
                  v-model="passwordConfirm"
                  @blur="$v.passwordConfirm.$touch()"
                />
                <template v-if="$v.passwordConfirm.$error">
                  <small
                    v-if="!$v.passwordConfirm.required"
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
              <button type="submit" class="btn btn-primary">SIGN UP</button>
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
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  validations: {
    name: { required },
    email: { required, email },
    password: { required },
    passwordConfirm: { required }
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.userForm = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        }
        return this.$store.dispatch('signup', this.userForm)
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
