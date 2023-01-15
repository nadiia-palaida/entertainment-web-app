<template>
  <div class="menu-wrap">
    <div class="menu-logo">
      <NuxtLink to="/">
        <img src="~assets/img/logo.png" alt="logo">
      </NuxtLink>
    </div>

    <ul class="menu-list">
      <li v-for="item in menu" class="menu-item">
        <NuxtLink :to="{name: item.name}" class="menu-link">
          <Icon :src="item.icon" class="menu-icon"/>
        </NuxtLink>
      </li>
    </ul>

    <div class="menu-account">
      <NuxtLink to="login">
        <img src="~assets/img/accounts/account1.jpg" alt="account">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Menu",
  components: {Icon},
  data() {
    return {
      menu: [
        {
          link: '/',
          icon: 'home',
          name: 'home'
        },
        {
          link: 'movies',
          icon: 'movies',
          name: 'movies'
        },
        {
          link: 'tv-series',
          icon: 'tv',
          name: 'tv-series'
        },
        {
          link: 'bookmarks',
          icon: 'bookmark-menu',
          name: 'bookmarks'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
