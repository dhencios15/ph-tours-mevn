<template>
  <div id="app" class="container-fluid mt-3">
    <MainNavbar />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <MainFooter class="mt-5" />
  </div>
</template>

<script>
export default {
  components: {
    MainNavbar: require('./components/MainNavbar').default,
    MainFooter: require('./components/MainFooter').default
  }
}
</script>

<style>
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
