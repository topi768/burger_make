<template>
<div class="container">
  <my-header></my-header>
</div>

  
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
/////colors
//primary
$primary: #5243C2;
$danger: #FF4D4F;
$black: #1F2939;
$muted:  #949BA6;
$titanWhite: #F5F5FF;
$blackSqueeze: #F0F7FA;
$white: #fff;
//red
$red500: #FF4D4F;
$red400: #FF9293;
$red300: #FFC8C8;
$red200: #FFEDED;
//indigo
$indigo600: #473AA6;
$indigo500: #5243C2;
//gray
$gray200:#D4D4D4;
$gray100:#F4F4F4;



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
}
//
.container {
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  padding: 5%;
}
</style>
