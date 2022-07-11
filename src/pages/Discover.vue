<template>
<div class="container">
    <div class="flex-container">
        <h1 class="title">Make Your Burger</h1>
        <img class="main-img" src="@/assets/img/discover/mainImg.png" alt="">
    </div>
    <button class="button" :style="{ width: width, height: height}" v-on:mouseenter="buttonAnimation" >
        <p>make burger</p>
    </button>
</div>

    
</template>

<script>

export default {
    beforeCreate: function() {
        document.body.className = 'discover';
    },
      data() {
        return {
            width: '120px',
            height: '120px'
        };
    },
    // methods: {
    //     buttonAnimation() {
    //         let button = event.target
    //         // startWidth = button.offsetWidth
    //         // endWidth= startWidth + 
    //         console.log(startWidth);
    //     }

    // },
    computed: {
        buttonAnimation() {
            let button = event.target
            let startWidth =button.offsetWidth
            let endWidth= startWidth + 60

            button.style.width = button.offsetWidth

            for (startWidth; startWidth < 220; startWidth++) {
                this.width = startWidth + 'px'
                this.height = startWidth + 'px'
                console.log("sr");
            }

            console.log(button.getBoundingClientRect().width);
        }
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
    // animation-duration: 0.8s; 
    // animation-fill-mode: both; 
    // transform: scale(1);
    //     @keyframes example {
    //         // 0% {
    //         //     // transform: scale(1);
    //         // }
    //     // 15% {
    //     //     transform: scale(1.3);
    //     // }
    //     // 30% {
    //     //     transform: scale(1.5);
    //     // }
    //     // 40% {
    //     //     transform: scale(1.2);
    //     // }
    //     // 50% {
    //     //     transform: scale(1.3);
    //     // }
    //     // 75% {
    //     //     transform: scale(1.5);

    //     // }
    //     100% {
    //         transform: scale(1.4);
    //     }
    // }
    // transform: scale(1);

        // transition: 0.3s;
        // animation:  0.8s ease;
        // animation-fill-mode: forwards;
    &:hover {
        
        // transform: scale(1.5);
        // animation-duration: 0.5s;
    }
}
</style>