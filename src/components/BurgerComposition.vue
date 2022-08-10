<template>
    <div class="burger-composition" >
        <div 
        class="burger-composition__layer"
        v-for="(layer, index) in burgerCompositionWithLayot"
        :key="index"
        :style="'z-index:' + index + ';margin: ' + layer[0].negativeMargin + 'px 0' + ';background: url(@/assets/img/makeBurger/ingredients/' + layer[0].name + layer.length + '.png);'"
        :data-count-in-layer="layer.length"
        >
        <div
            v-for="(ingredient, i) in layer"
            :key="i"
            class="burger-composition__item"
            :class="{multiplePerLayer: ingredient.multiplePerLayer}"
            :style="'width:' + 100 / layer.length + '%'"
        >
            <img
                :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)"
                

            >
        </div>

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


    }
  },
}
</script>

<style lang="scss" scoped>
.burger-composition {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    width: 40%;
    background: url("@/assets/img/makeBurger/bg.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 400px;
    &__layer {
        max-width: 270px;
        // max-height: 128px;
        display: flex;
        // grid-template-rows: 1fr;
        // justify-content: center;
        .burger-composition__item {
            width: 100%;
            max-height: 120px;
            img {
                overflow: hidden;
                // height: 128px;
                width: 100%;

                // flex-shrink: 1;
                // flex-grow:1;
                // width: 120px;
                // flex-basis: content;
                // flex-shrink:0;
                // width: fit-content;
                // flex-grow: 0;
            }
        }

    }

}
</style>