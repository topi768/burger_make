<template>
    <div class="logo">
      <img  src="@/assets/logo.png" alt="">
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
  // display: block;
  //
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8em !important;
  border-radius: 50%;
  background: $titanWhite;
  max-width: 80px;
  max-height: 80px;
  // min-width: 40px;
  // min-height: 40px;
}
</style>