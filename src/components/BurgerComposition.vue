<template>
    <div class="burger-composition" >
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
    }
  },

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
.burger-composition {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 40%;
    background: url("@/assets/img/makeBurger/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 600px;
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