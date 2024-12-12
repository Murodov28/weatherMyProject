<template>
  <div class="main__week">
    <Day v-for="(day, i) in daily" :key="i" :day="day" />
  </div>
</template>

<script>
import { mapState } from "vuex/dist/vuex.cjs.js";
import Day from "./Day.vue";
export default {
  components: { Day },
  computed: {
    ...mapState(["weather"]),
    daily() {
      return this.weather ? this.weather.daily : {};
    },
  },
};
</script>

<style lang="scss" scoped></style>
