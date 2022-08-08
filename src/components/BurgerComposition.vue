<template>
    <div class="burger-composition" >
        <div 
        class="burger-composition__layer"
        v-for="ingredient in burgerComposition" 
        :key="ingredient.name"
        :style="'z-index:'+  burgerComposition.length + '; margin: ' + ingredient.negativeMargin + 'px 0; '" 
        >
            <img
                :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)"
                :class="[ burgerComposition[burgerComposition.length-2] != undefined  && burgerComposition[burgerComposition.length-1].name == burgerComposition[burgerComposition.length-2].name && ingredient.maxInLayer != 1? 'twoInLayer' : ''  ]"
            >

            <!-- <p
                v-if="burgerComposition[burgerComposition.length-2] != undefined  && burgerComposition[burgerComposition.length-1].name == burgerComposition[burgerComposition.length-2].name  "

            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore atque vero soluta magni et exercitationem possimus, impedit deleniti, nam fugit maxime voluptas suscipit iste consectetur similique vel? Ducimus, nam!</p> -->

            <!-- <img
                :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)"
            > -->
        </div>



    </div>
</template>

<script>
export default {
    props: {
        burgerComposition: {
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
        max-height: 128px;
        // position: absolute;
        // transform: translateY(-1%);
        // margin: -50px 0;
        .twoInLayer{
            width: 135px;
        }
    }
    // &__item[data-count-in-layer="3"] {
    //     width: 20%;
    // }
}
</style>