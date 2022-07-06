<template>
<div class="container">
  <header class="header" >
  <nav class="nav">
    <div class="nav__item logo">
      <img src="@/assets/logo.svg" alt="">
    </div>
    <div 
      @click="$router.push('/')"
      class="nav__item"
    >Discover  </div>
    <div
      @click="$router.push('/makeBurger')"
      
      class="nav__item "
    >Make Your Burger</div>
  </nav>
  <div class="nav__call" >
      <p class="call__text">Call Me Back</p>
      <a class="call__number" href="#">8 800 437-87-22</a>
    </div>
  <!-- <router-view/> -->
</header>
</div>


</template>

<script>
export default {
  methods: {
    activePage() {
      // nav__items = document.querySelectorAll('.nav__item')
      // console.log(nav__items);
      // let nav__item = event.target;
      // nav__item.classList.add("active")
      // console.log("fe");
    }
  },
    
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.header {
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  user-select:none;
  .nav, .nav__call{
    display: flex;
    align-items: center;
    
  }
  .nav__item, .call__text, .call__number {
    margin: 0 8%;
    font-family: OpenSans Regular;
    font-size: 1rem;
  }
  .nav__item + .active {
    color: red;
  }
  .nav__call {
    .call__text {
      color: $danger;
      padding: 6px 12px;
      background: $red200;
      border-radius: 99px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      &::before {
        content: url('@/assets/ico/phone.svg');
        margin: 0 5px 0 0;
        
      }
    }
  }
}
</style>
