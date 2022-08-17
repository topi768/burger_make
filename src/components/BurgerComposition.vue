<template>
    <div class="wrapper" >
        <div class="burger-composition"
  
        >
            <transition-group name="ingredient-list"  >
                <div 
                    class="burger-composition__layer"
                    v-for="(layer, index) in burgerCompositionWithLayot"
                    :key="layer[0]"
                    :style="{'margin-bottom': layer[0].negativeMargin + 'px', 'z-index': index}"
                    
                >
                    <img
                        :src="[layer.length == 1 ? require(`@/assets/img/makeBurger/ingredients/${layer[0].name}.png`):  require('@/assets/img/makeBurger/ingredients/' + layer[0].name + layer.length +'.png')]"
                        :class="layer[0].name"
                    >
                </div>
            </transition-group>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        burgerCompositionWithLayot: {
            type: Array,
            required :true
        }
    },
    data() {
        return {
             startHeight: '',
             endHeight: '',
             deltaSize :0,
        }
    },
    mounted(){
        this.startHeight = document.querySelector('.burger-composition').clientHeight

    },
    computed: {
        // overflowHasOccurred() {
        //     return console.log(this.startSize);

        // }
    },
    watch: {
        burgerCompositionWithLayot: {
            handler(oldBurgerComposition, newBurgerComposition) {
                this.endHeight =  document.querySelector('.burger-composition').clientHeight
                if (this.endHeight > this.startHeight ) {
                    this.deltaSize =this.startHeight - this.endHeight
                }else {
                    this.deltaSize =0
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>
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
.burger-composition {
    transform: translateY(-400px);
    min-height: 600px;
    height: 1000px;
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

}
</style>