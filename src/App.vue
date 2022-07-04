<template>
<header>
  <my-header></my-header>
</header>
  
</template>

<script>
import MyHeader from "@/components/MyHeader";
export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
//font
@font-face {
  font-family: "OpenSans SemiBold";
  src: local("OpenSans"),
   url(./fonts/OpenSans/OpenSans-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "OpenSans Regular";
  src: local("OpenSans"),
   url(./fonts/OpenSans/OpenSans-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "OpenSans Bold";
  src: local("OpenSans"),
   url(./fonts/OpenSans/OpenSans-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "OpenSans ExtraBold";
  src: local("OpenSans"),
   url(./fonts/OpenSans/OpenSans-ExtraBold.ttf) format("truetype");
}
//
*,
*::before,
*::after {
  box-sizing: border-box;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
//

</style>
