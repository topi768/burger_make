<template>
    <h1 class="title" >Make Your Burger</h1>
</template>

<script>
export default {
    name: 'my-title'
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.title {
    display: block;
    width: 1px;
    font-family: 'OpenSans Regular';
    font-style: normal;
    font-size: 4.5rem;
    line-height: 80px;  
    color: $black;
    z-index: 1;
    @media(max-width: $lg){
        width: 100%;
        font-size: 3rem;
        line-height: 58px;
    }
}
</style>