<template>
  <div class="container" v-if="weather">
    <Navbar />
    <Main />
  </div>
  <div class="loader" v-else>
    <img src="@assets/images/imag (2).svg" alt="" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import { mapActions, mapState } from "vuex/dist/vuex.cjs.js";
export default {
  components: { Navbar, Main },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
  created() {
    this.getWeather();
  },
};
</script>

<style lang="scss" scoped></style>
