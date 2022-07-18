<template>
<div class="container">
    <div class="flex-container">
        <h1 class="title">Make Your Burger</h1>
        <img class="main-img" src="@/assets/img/discover/mainImg.png" alt="">
        <button class="button" @click="$router.push('/makeBurger')" >
            <p>make burger</p>
        </button>
    </div>

      <router-view/>

</div>

    
</template>

<script>

export default {
    // beforeCreate: function() {
    //     document.body.className = 'discover';
    // },
      data() {
        return {
            
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

    }


}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .main-img {
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
    
        font-size: 4.5rem;
        line-height: 80px;  
        color: $black;
        z-index: 1;
    }
    @media(max-width: 992px){
        flex-direction: column;
        .title {
            width: 100%;
            font-size: 3rem;
        }
        .main-img{
            position: relative;

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
        cursor: pointer;
        //text
        color: $white;
        font-family: 'OpenSans Bold';
        font-style: normal;
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 30px;
        text-transform: uppercase;
        transition: 0.3s;
        &:hover { 
            transform: scale(1.5);
        }
        @media(max-width: 992px) {
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
}

</style>