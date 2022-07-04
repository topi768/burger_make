<template>
  <nav class="nav">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="">
    </div>
    <router-link to="/">Discover</router-link>
    <router-link to="/about">Make Your Burger</router-link>
    
  </nav>
  <div class="nav__call" >
      <p class="call__text">Call Me Back</p>
      <a class="call__number" href="#">8 800 437-87-22</a>
    </div>
  <router-view/>
</template>

<script>
export default {
  

}
</script>

<style scoped lang="scss">
.nav {
  
}
</style>
