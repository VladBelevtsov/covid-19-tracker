<template>
  <section>
    <div class="container">
      <div class="allNews">
        <nuxt-link class="more" to="/">
          Back
        </nuxt-link>
        <ul>
          <li v-for="index in (limit < info.length ? limit: info.length)" :key="index">
            <a target="_blank" :href="info[index - 1].link">
              <div class="articles">
                <h4>{{ info[index - 1].title }}</h4>
                <p>{{ info[index - 1].summary }}</p>
                <div class="detail">
                  <span class="date">{{ info[index - 1].published_date }}</span>
                  <span class="author" v-if="info[index - 1].author">Author: {{ info[index - 1].author }}</span>
                  <span class="site">Web site: {{ info[index - 1].clean_url }}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
         <nuxt-link class="more" to="/">
          Back
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar'

import axios from 'axios'

export default {
  components: {
    Navbar,
  },
  data(){
    return {
      info: []
    } 
  },
  mounted() {
    var self = this;
    axios.get('https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid', {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
        "x-rapidapi-key": "fc64447d62msh5f3fd114b81090dp13fc45jsn9b5f2fe5b1c3"
      }})
    .then( function(resp) {
      self.info = resp.data.articles;
      console.log('Data: ', resp.data.articles);


    })
    .catch( function(error) {
      console.log('Error: ', error);
    })
  }
}
</script>

<style>
.container {
  padding: 0 15px;
  max-width: 1240px;
  margin: 0 auto;
}

.allNews {
  padding-top: 200px;
}

.allNews svg {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.allNews h2 {
  font-size: 34px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.allNews ul {
  padding-top: 2rem;
}

.allNews li {
  list-style: none;
  margin-bottom: 2rem;
}

.allNews a {
  text-decoration: none;
}

.allNews .more {
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  padding: 10px 15px;
  color: #000;
  font-size: 16px;
  transition: .2s ease;
  display: inline-block;
}

.allNews .more:hover {
  background: #73D0F5;
}

.articles {
  padding: 1.25rem;
  background: #fff;
  box-shadow: 0 0 25px 0 rgba(73,80,87,.10);
  border-radius: 0.5rem;
  transition: .2s ease;
}

.articles:hover {
  transform: scale(1.02);
}

.articles h4 {
  font-size: 20px;
  color: black;
  font-weight: 500;
  padding-bottom: 10px;
}

.articles p {
  color: #666;
  font-size: 16px;
  padding-bottom: 10px;
}

.articles span {
  color: #000;
  margin-right: 10px;
}
</style>