<template>
<div class="container">
    <div class="content" >
        <div class="flex-container" >
            <h1 class="title">Make Your Burger</h1>
            <div class="img__wrapper">
                <img class="main-img" src="@/assets/img/discover/mainImg.png" alt="">
                <a
                    v-if="$store.state.isMobile " 
                    class="button"  
                    href="#burger-composition" 
                    
                    >
                    <p>MAKE BURGER</p>
                </a>
                <button
                    v-else
                    class="button"  
                    @click="$router.push('/makeBurger')"
                    >
                    <p>MAKE BURGER</p>
                </button>
    
            </div>
        </div>
    </div>
    <router-view/>
    <additional-content-on-mobile v-if="$store.state.isMobile"></additional-content-on-mobile>
</div>

    
</template>

<script>
import AdditionalContentOnMobile from "@/components/AdditionalContentOnMobile";

export default {
    components: {
        AdditionalContentOnMobile
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.content {
    
    .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        // overflow: hidden;
        @media(max-width: $lg){
            flex-direction: column;
        }
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
        .img__wrapper {
            width: 63%;
            position: relative;
            @media(max-width: $lg) {
                width: 100%;
                height: 100%;
            }
            .button{
                p {
                    
                    text-decoration: none;
                    width: min-content ;
                    text-align: center;
                }
                color: $white;
                
                text-decoration: none;
                position: absolute;
                top: 60%;
                left: -10%;
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
                transition: 0.3s;
                //text
                color: $white;
                font-family: 'OpenSans ExtraBold';
                font-style: normal;
                font-weight: 800;
                font-size: 1.5rem;
                line-height: 30px;
                text-transform: uppercase;
                &:hover { 
                    transform: scale(1.5);
                    @media(max-width: $lg) {
                        transform: scale(1.5) translate(-25%, -25%);
                    }
                }
                @media(max-width: $lg) {
                    top: 50%;
                    left: 50%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%);
                    font-size: 1rem;
                    line-height: 20px;
                }
            }
            .main-img {
                width: 100%;
                height: 100%;
            }
        }
    }
}



</style>