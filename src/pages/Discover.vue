<template>
<div class="container">
    <div class="flex-container">
        <h1 class="title">Make Your Burger</h1>
        <img class="main-img" src="@/assets/img/discover/mainImg.png" alt="">
    </div>
    <button class="button">
        <p>make burger</p>
    </button>

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
@import "@/assets/variables.scss";

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main-img {
        // flex-basis: 50%;
        width: 75%;
        max-width: 980px;
        max-height: 930px;
        z-index: 0;

    }
    .title {
        display: block;
        width: 1px;
        font-family: 'OpenSans Bold';
        font-style: normal;
        // font-weight: 700;
        font-size: 72px;
        line-height: 80px;  
        /* or 111% */
        color: $black;
        z-index: 1;
    }
}
.button {
    position: absolute;
    top: 65%;
    left: 33%;
    border-radius: 50%;
    width: 9.375vw;
    height: 9.375vw;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    min-height: 120px;
    background: $primary;
    border: 0px;
    //text
    color: $white;
    font-family: 'OpenSans Bold';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5em;
    line-height: 30px;
    text-transform: uppercase;
    //
    animation-duration: 0.8s;
      
        @keyframes example {
            // 0% {
            //     // transform: scale(1);
            // }
        // 15% {
        //     transform: scale(1.3);
        // }
        // 30% {
        //     transform: scale(1.5);
        // }
        // 40% {
        //     transform: scale(1.2);
        // }
        // 50% {
        //     transform: scale(1.3);
        // }
        75% {
            transform: scale(1.5);

        }
        100% {
            transform: scale(1.4);
        }
    }
    &:hover {
        animation-name: example;
        animation: example 0.8s ease;
        // animation-duration: 0.5s;
    }
}
</style>