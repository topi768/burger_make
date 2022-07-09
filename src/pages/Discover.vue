<template>
<div class="container">
    <div class="flex-container">
        <h1 class="title">Make Your Burger</h1>
        <img class="main-img" src="@/assets/img/discover/mainImg.png" alt="">
    </div>
</div>

    
</template>

<script>
export default {
    beforeCreate: function() {
        document.body.className = 'discover';
    }
}
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    justify-content: space-between;
    .main-img {
        // flex-basis: 50%;
        width: 75%;
        max-width: 980px;
        max-height: 930px;
    }
    .title {
        display: block;

    }
}
</style>