<template>
  <my-header></my-header>


  <router-view></router-view>
</template>

<script>
import MyHeader from "@/components/MyHeader";
export default {
  components: {
    MyHeader
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">


/////
*,
*::before,
*::after {
  box-sizing: border-box;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  // overflow-x: hidden;
}
//
.lock  {
  overflow: hidden;

}


//
.container {
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  padding: 0 2.5%;


}
</style>
