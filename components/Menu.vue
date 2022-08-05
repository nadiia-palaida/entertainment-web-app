<template>
  <div class="menu-wrap">
    <div class="menu-logo">
      <NuxtLink to="/">
        <img src="~assets/img/logo.png" alt="logo">
      </NuxtLink>
    </div>

    <ul class="menu-list">
      <li class="menu-item">
        <NuxtLink to="/" class="menu-link">
          <Icon src="home" class="menu-icon"/>
        </NuxtLink>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">
          <Icon src="movies" class="menu-icon"/>
        </a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">
          <Icon src="tv" class="menu-icon"/>
        </a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">
          <Icon src="bookmark-menu" class="menu-icon"/>
        </a>
      </li>
    </ul>

    <div class="menu-account">
      <img src="~assets/img/accounts/account1.jpg" alt="account">
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Menu",
  components: {Icon}
}
</script>

<style scoped>

</style>
