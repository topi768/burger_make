<template>
    <div class="logo">
      <picture>
        <source srcset="@/assets/mobLogo.svg" media="(max-width: 992px)">
        <img srcset="@/assets/logo.svg" >
      </picture>

      <!-- <img  src="@/assets/logo.png" alt=""> -->
    </div>
</template>

<script>
export default {
    name: 'my-logo'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.logo {

  // display: flex;
  // align-items: center;
  // justify-content: center;
  // padding: 4.8vw ;
  // border-radius: 50%;
  // background: $titanWhite;
  max-width: 80px;
  max-height: 80px;

}
</style>