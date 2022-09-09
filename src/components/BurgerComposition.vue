<template>
    <div class="wrapper" >
        <transition name="excess-message-fade" >
            <div v-show="isExcess" class="excess-message">
                <div class="excess-message__trigon" ></div>
                <div class="excess-message__content" >
                    <p>You are sure?</p>
                </div>
            </div>
        </transition>

        <div class="burger-composition">
            <transition-group name="ingredient-list"  >
                <div 
                    class="burger-composition__layer"
                    v-for="(layer, index) in $store.state.burgerCompositionWithLayot"
                    :key="layer[0]"
                    :style="{'margin-bottom': layer[0].negativeMargin + 'px', 'z-index': index}"
                >
                    <img     
                        :src="[layer.length == 1 ? require(`@/assets/img/makeBurger/ingredients/${layer[0].name}.png`):  require('@/assets/img/makeBurger/ingredients/' + layer[0].name + layer.length +'.png')]"
                        :class="layer[0].name"
                    >
                </div>
                <transition @before-leave="beforeLeave" name="ketchup-fade" >
                    <div v-show="$store.getters.giftShow"  class="ketchup" >
                        <img src="@/assets/img/makeBurger/ketchup.png"  alt="">
                        <p><span>+ Tomato Ketchup</span> 1.2 oz  </p>
                    </div>
                </transition>
            </transition-group>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        // burgerCompositionWithLayot: {
        //     type: Array,
        //     required :true
        // }
    },
    data() {
        return {
             isExcess: false,

        }
    },
    mounted(){
    },
    computed: {

    },
    watch: {
        '$store.getters.burgerCompositionWithLayot': function () {
            this.topPositionBunTop = document.querySelector('.bun_top').getBoundingClientRect().top + window.scrollY
            this.isExcess = this.topPositionBunTop < 0
            // console.log( document.querySelector('.bun_top').getBoundingClientRect());
        }
    },
    methods: {
        beforeLeave(el) {
            const {marginLeft, marginTop, width, height} = window.getComputedStyle(el)
            el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
            el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
            el.style.width = width
            el.style.height = height
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

//ingredient-list animation
.ingredient-list-move, 
.ingredient-list-enter-active,
.ingredient-list-leave-active {
  transition: all 0.3s ease;
}

.ingredient-list-enter-from,
.ingredient-list-leave-to {

  opacity: 0;
  transform: translateX(30px);
}
//ketchup animation

.ketchup-fade-enter-active,
.ketchup-fade-leave-active {
  transition: all 0.4s ease;

}

.ketchup-fade-enter-from,
.ketchup-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
  
}
//excess-message-fade 

.excess-message-fade-enter-active,
.excess-message-fade-leave-active {
  transition: all 0.3s ease-in-out;;

}

.excess-message-fade-enter-from,
.excess-message-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  
}

//
.wrapper {
    width: 40%;
    position: relative;
    min-height: 600px;
    align-self: flex-end;
    background: url("@/assets/img/makeBurger/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
.excess-message {
    position: absolute;
    right: 0;
    padding: 1px 18px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    background: $white;
    z-index: 1000;
    &__trigon {
        position: absolute;
        top: -38px;
        left: 30px;
        border: 20px solid transparent; 
        border-bottom: 20px solid $white;;
    }
    &__content {
        padding: 1px 0 0 0;

        p {
            text-align: center;
            font-family: "OpenSans SemiBold";
            font-style: normal;
            font-weight: 600;
            font-size: 1.25em;
            line-height: 32px;
            color: $black;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
        }
        p:before {
            display: block;
            position: relative;
            content: url('@/assets/ico/image22.png');
            top: 6px;
            right: 5px;
        }
    }
}
.burger-composition {
    transform: translateY(-1400px);
    min-height: 1000px;
    height: 2000px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 100%;
    // height: auto;

    &__layer {
        max-width: 440px;
        width: 100%;
        height: 128px;
        // max-height: 190px;
        display: flex;
        // align-items: center;
        justify-content: center;

        img {
            max-width: 100%;
            width: 80%;  
            // height: 100%;
            // position: absolute;
        }
    }
    .ketchup {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: -4%;
        right: -40%;
        z-index: 100;
        @media (max-width: $lg) {
            flex-direction: column;
            right: -10%;
            bottom: -10%;
        }
        img {
            max-width: 160px;
            width: 17vw;
        }
        p {
            color: $black;
            font-family: 'OpenSans Regular';
            font-style: normal;
            font-weight: 600;
            font-size: 1.25em;
            line-height: 32px;
            span {
                color: $danger;
            }
        }
    }
}
</style>