<template>
<div class="container" :class="{BurgerActive: isBurgerActive}">
  <header class="header" >
  <nav class="nav">
      <my-logo></my-logo>
      <div class="nav__item nav__item1" id="nav__item1" :data-checked="isDiscoverChecked" @click="$router.push('/')">Discover</div>
      <div class="nav__item nav__item2" id="nav__item2" :data-checked="isMakeBurgerChecked" @click="$router.push('/makeBurger')">Make Your Burger</div>
  </nav>
  <div class="nav__call" >
    <p class="call__text">Call Me Back</p>
    <p class="telephone-number">8 800 437-87-22</p>
  </div>
  <!-- <router-view/> -->
  <div class="header__burger"  >
    <div class="burger__btn" @click.stop="openBurger" >
      <span class="burger__span"></span>

    </div>
    <div class="burger__menu">
      <p class="telephone-number">8 800 437-87-22</p>
      <div class="nav__item nav__item1" id="nav__item1">Discover</div>
      <div class="nav__item nav__item2" id="nav__item2">Make Your Burger</div>
    </div>
  </div>
  </header>
</div>


</template>

<script>
export default {
  data() {
    return {
      isDiscoverChecked: true,
      isMakeBurgerChecked: false,
      isBurgerActive: false
    }
  },
  methods: {
  isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
  openBurger(){
    event.currentTarget.classList.toggle("active")
    if (this.isBurgerActive == false) {
      this.isBurgerActive = true
      document.querySelector("html").classList.add('lock')

    }else{
      this.isBurgerActive = false
      document.querySelector("html").classList.remove('lock')
    }
    },
  },
  computed: {
    
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

body {
  position: relative;
}
.container {
  // position: absolute;
  // width: 100%;
  // top: 0;
  // left: 0;
}


.header {

  margin: 1.5% 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  user-select:none;
  font-family: OpenSans Regular;
  font-size: 1rem;
  .nav__item {
    margin: 0 0 0 25%;
    @media (max-width: $lg) {
      margin: 0
    }
  }
  .nav {
    display: flex;
    align-items: center;
    @media (max-width: $lg) {
      .nav__item{
        display: none;
      }
    }
  }
  
  .nav__call{
    display: flex;
    align-items: center;
    @media (max-width: $lg) {
      .telephone-number{
        display: none;
      }
    }
  }
  .telephone-number {
    font-weight: 600;
    line-height: 20px;
  }

  .nav__call {
    .call__text {
      transform: translateX(-45%);
      color: $danger;
      padding: 6px 12px;
      background: $red200;
      border-radius: 99px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      &::before {
        content: url('@/assets/ico/phone.svg');
        margin: 0 5px 0 0;
        
      }
      @media (max-width: $lg) {
        transform: translateX(0)
      }
    }

  }
  //burger
  .header__burger {
    display: none;
    @media (max-width: $lg) {
      display: block;
    }
    .burger__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: $titanWhite;
      z-index: 1001;
      .burger__span, .burger__span::after, .burger__span::before {
        position: absolute;
        display: block;
        background: $primary;
        height: 2px;
        transition: 0.4s;

      }

      .burger__span {
        width: 16px;
        &::after {
          content: "";
          width: 12px;
          transform: translate(0, 6px);
        }
        &::before {
          content: "";
          width: 12px;
          transform: translate(0, -6px);
        }
      }
    }
    //burger animation
     .active {
        .burger__span::after {
          width: 16px;
          transform: translate(0,0) rotate(-45deg);

        }
        .burger__span::before{
          width: 16px;
          transform: translate(0, 0) rotate(45deg);
        }
        .burger__span {
          background: rgba(0, 0, 0, 0);
        }
      }
    //end burger animation
    .active + .burger__menu {
          position: absolute;
          transform: translateX( -100% ) translateY(100%) ;
          overflow-y: hidden;

    }
    .burger__menu {
      position: absolute;
      margin-right: 2.5%;
      margin-left: calc(48px + 2.5%);
      top: -100%;
      transform: translateX( -100% );
      width: 100vw;
      height: 100vh  ;
      background: $white;
      z-index: 1000;
      transition: 0.4s;
      //
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .telephone-number {
        position: absolute;
        top: 7%;
        // left: 50%;
      }
      .nav__item1 {
        margin: 0 0 7% 0;
      }
    }
  }
}
//


//animations nav

.nav__item[data-checked=true] {
  padding: 2px 0 0 0 ;
}
.label {
  cursor: pointer;
}

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
