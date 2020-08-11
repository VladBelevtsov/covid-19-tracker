<template>
  <article class="rol">
    <div class="item">
      <div class="card-box">
        <div class="icon">
          <img src="~/assets/icons/001-fever.png" alt="cases">
        </div>
        <h2 id="cases">{{ new Intl.NumberFormat('ja-JP').format(Number(info.cases)) }}</h2>
        <p class="p-first">TOTAL cases</p>
        <p>today active</p>
        <h3 id="casesToday">{{ new Intl.NumberFormat('ja-JP').format(Number(info.active)) }}</h3>
      </div>
    </div>
    <div class="item">
      <div class="card-box">
        <div class="icon">
          <img src="~/assets/icons/002-patient.png" alt="recovered">
        </div>
        <h2 id="recovered">{{ new Intl.NumberFormat('ja-JP').format(Number(info.recovered)) }}</h2>
        <p class="p-first">recovered</p>
        <p>recovered today</p>
        <h3 id="recoveredToday">{{ new Intl.NumberFormat('ja-JP').format(Number(info.todayRecovered)) }}</h3>
      </div>
    </div>
    <div class="item">
      <div class="card-box">
        <div class="icon">
          <img src="~/assets/icons/003-deadly.png" alt="deadly">
        </div>
        <h2 id="deaths">{{ new Intl.NumberFormat('ja-JP').format(Number(info.deaths)) }}</h2>
        <p class="p-first">TOTAL DEATHS</p>
        <p>deaths today</p>
        <h3 id="deathsToday">{{ new Intl.NumberFormat('ja-JP').format(Number(info.todayDeaths)) }}</h3>
      </div>
    </div>
  </article>
</template>

<script>

import axios from 'axios'

export default {
  name: "totalInfo",
  data(){
    return {
      info: []
    } 
  },
  mounted() {
    var self = this;
    axios.get('https://disease.sh/v3/covid-19/all')
    .then( function(resp) {
      self.info = resp.data;
      //console.log('Data: ', resp.data);
    })
    .catch( function(error) {
      console.log('Error: ', error);
    })
  }
}
</script>

<style>
.rol {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.rol .item {
  width: 33.33%;
}

.rol .card-box {
  padding: 1.25rem;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 0 25px 0 rgba(73,80,87,.10);
  border-radius: 0.5rem;
  transition: .2s ease;
}

.rol .card-box:hover {
  transform: scale(1.05);
}

.rol .card-box .icon {
  margin-bottom: 0.5rem;
}

.rol .card-box .icon img {
  width: 45px;
}

.rol .card-box h2 {
  font-size: 40px;
}

.rol .card-box p {
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  text-transform: uppercase;
}

.p-first {
  padding-bottom: 1rem;
}

.rol .card-box h3 {
  font-size: 26px;
}

@media screen and (max-width: 800px) {
  .rol .item {
    width: 100%;
  }

  .rol .card-box:hover {
    transform: scale(1);
  }

}
</style>