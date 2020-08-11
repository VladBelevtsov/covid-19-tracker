<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link no-prefetch to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/news">
          News
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style>
.nav {
  position: absolute;
}

.nav li {
  list-style: none;
  padding-left: 20px;
}

.nav ul {
  display: flex;
}
</style>