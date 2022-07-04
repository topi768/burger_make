<template>
<header class="header" >
  <nav class="nav">
    <div class="nav__item logo">
      <img src="@/assets/logo.svg" alt="">
    </div>
    <div class="nav__item" >Discover</div>
    <div class="nav__item" >Make Your Burger</div>

    
  </nav>
  <div class="nav__call" >
      <p class="call__text">Call Me Back</p>
      <a class="call__number" href="#">8 800 437-87-22</a>
    </div>
  <router-view/>
</header>

</template>

<script>
export default {
  

}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  .nav, .nav__call{
    display: flex;
    align-items: center;
    
  }
  .nav__item, .call__text, .call__number {
    margin: 0 10%;
    font-family: OpenSans Regular;
    font-size: 1rem;
  }
  .nav__call {
    .call__text {
      color: $danger;
    }
  }
}
</style>
