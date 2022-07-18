<template>
<div class="container">
  <header class="header" >
  <nav class="nav">
    <my-logo></my-logo>
      <!--  -->

      <div class="nav__item nav__item1" id="nav__item1" :data-checked="isDiscoverChecked" @click="$router.push('/')">Discover</div>
      <div class="nav__item nav__item2" id="nav__item2" :data-checked="isMakeBurgerChecked" @click="$router.push('/makeBurger')">Make Your Burger</div>

      <!--  -->

      <!--  -->
      <!-- <input class="input" type="radio" id="discover" v-bind:checked="isDiscoverChecked" name="nav" value="nav"  >
      <label  for="discover" class="nav__item label label1"  @click="$router.push('/')">Discover</label>
      <input class="input " type="radio" id="makeBurger"  v-bind:checked="isMakeBurgerChecked" name="nav" value="nav" >
      <label  for="makeBurger" class="nav__item label label2"  @click="$router.push('/makeBurger')" >Make Your Burger</label> -->
      <!--  -->
  </nav>
  <div class="nav__call" >
      <p class="call__text">Call Me Back</p>
      <p class="call__number">8 800 437-87-22</p>
    </div>
  <!-- <router-view/> -->
</header>
</div>


</template>

<script>
// import navigation from "@/hooks/navigation"
export default {
  data() {
    return {
      isDiscoverChecked: true,
      isMakeBurgerChecked: false,

    }
  },
  methods: {

  },
  computed: {
    
  },
  created() {
    
  },
  watch: {
      $route (to, from){
        if (to.path == '/') {
          this.isDiscoverChecked = true
          this.isMakeBurgerChecked = false
        }else if (to.path == '/makeBurger'){
          this.isDiscoverChecked = false
          this.isMakeBurgerChecked = true
        }
      }
    }

}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";


.header {
  margin: 1.5% 0 0 0;;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  user-select:none;
  .nav, .nav__call{
    display: flex;
    align-items: center;
    
  }
  .nav__item, .call__text, .call__number {
    margin: 0 0 0 25%;
    font-family: OpenSans Regular;
    font-size: 1rem;
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
    .call__number {
      
      font-weight: 600;
      line-height: 20px;
    }
  }
}
// .nav__item {
//   position: absolute;
//   // z-index: -1;
//   // opacity: 0;
// }
.nav__item[data-checked=true] {
  padding: 2px 0 0 0;
}
//animations
@keyframes bottomBandLeft {
  0% {
    width: 100px;
    transform: translateX(100%);
  }
  100% {
    width: 100%;
    transform: translateX(0px);
  }
}
@keyframes bottomBandRight {
  0% {
    width: 100px;
    transform: translateX(-100%);
  }

  100% {
    width: 100%;
    transform: translateX(0px);
  }
}

.nav__item[data-checked=true]::after{
  content: "";
  display: block;
  left: 0;
  height: 2px;
  background:  $primary;
  //
  animation-name: bottomBandLeft;
  animation-duration: 0.5s;
  
}
.nav__item1[data-checked=true]::after {
  animation-name: bottomBandLeft;
}
.nav__item2[data-checked=true]::after {
  animation-name: bottomBandRight;
}
</style>
