<template>
  <div class="main__content">
    <div class="main__content-left">
      <p class="main__content-left-degree">{{ Math.round(current.temp) }}°</p>
      <p class="main__content-left-today">Сегодня</p>
      <p class="main__content-left-time">Время: {{ getTime }}</p>
      <p class="main__content-left-city">
        Город: {{ weather.name.toUpperCase() }}
      </p>
      <div class="main__content-left-img">
        <img :src="getImg" alt="" />
      </div>
    </div>
    <div class="main__content-right">
      <img src="@assets/images/bg.png" alt="" class="main__content-right-bg" />
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@assets/images/about (2).svg" alt="" />
        </div>
        <span>Температура</span>
        <p>
          {{ Math.round(current.temp) }}° - ощущается как
          {{ Math.round(current.feels_like) }}°
        </p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@assets/images/about (4).svg" alt="" />
        </div>
        <span>Давление </span>
        <p>{{ current.pressure }} мм ртутного столба</p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@assets/images/about (3).svg" alt="" />
        </div>
        <span>Осадки</span>
        <p>{{ current.clouds }}%</p>
      </div>
      <div class="main__content-right-item">
        <div class="main__content-right-img">
          <img src="@assets/images/about (1).svg" alt="" />
        </div>
        <span>Ветер</span>
        <p>{{ current.wind_deg }} м/с {{ getWindDeg }} - {{ getWindSpeed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { weatherName } from "@/icons";
export default {
  data() {
    return {
      name: null,
      windDeg: null,
    };
  },
  computed: {
    ...mapState(["weather"]),
    current() {
      return this.weather ? this.weather.current : this.weather;
    },
    getTime() {
      return new Date().toLocaleString("en-US", {
        timeZone: this.weather.timezone,
        timeStyle: "short",
        hourCycle: "h23",
      });
    },
    getWindSpeed() {
      if (this.current.wind_speed <= 0.2) {
        return (this.name = "Штиль");
      } else if (this.current.wind_speed <= 1.5) {
        return (this.name = "Тихий");
      } else if (this.current.wind_speed <= 3.3) {
        return (this.name = "Лёгкий");
      } else if (this.current.wind_speed <= 5.4) {
        return (this.name = "Слабый");
      } else if (this.current.wind_speed <= 7.9) {
        return (this.name = "Умеренный");
      } else if (this.current.wind_speed <= 10.7) {
        return (this.name = "Свежий");
      } else if (this.current.wind_speed <= 13.8) {
        return (this.name = "Сильный");
      } else if (this.current.wind_speed <= 17.1) {
        return (this.name = "Крепкий");
      } else if (this.current.wind_speed <= 20.7) {
        return (this.name = "Очень Крепкий");
      } else if (this.current.wind_speed <= 24.4) {
        return (this.name = "Шторм");
      } else if (this.current.wind_speed <= 28.4) {
        return (this.name = "Сильный Шторм");
      } else if (this.current.wind_speed <= 32.6) {
        return (this.name = "Жестокий шторм");
      }
    },
    getWindDeg() {
      if (this.current.wind_deg == 0 || 270 < this.current.wind_deg >= 360) {
        return (this.windDeg = "Север");
      } else if (this.current.wind_deg <= 90) {
        return (this.windDeg = "Восток");
      } else if (this.current.wind_deg <= 180) {
        return (this.windDeg = "Юг");
      } else if (this.current.wind_deg <= 270) {
        return (this.windDeg = "Запад");
      }
    },
    descriotion() {
      return this.current.weather[0].description;
    },
    getImg() {
      return weatherName[this.descriotion] || weatherName["ясно"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
