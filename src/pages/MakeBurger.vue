<template>
    <div class="container">
        <div class="content" >
            <div class="flex-container" >
                <h1 class="title">Make Your Burger</h1>
                <burger-composition :burgerCompositionWithLayot='burgerCompositionWithLayot'></burger-composition>
                <price-tag></price-tag>
            </div>
            <select-ingredient></select-ingredient>
        </div>
    </div>

</template>
<script>
import BurgerComposition from "@/components/BurgerComposition";
import PriceTag from "@/components/PriceTag";
import SelectIngredient from "@/components/SelectIngredient";


export default {
    components: {
        BurgerComposition, PriceTag, SelectIngredient
    },
  data() {
    return {
        // countIngredients: 8,

        burgerComposition: [
            {name:'bun_bottom', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1,id: 'bun_bottom'},
            {name:'bun_top', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -75, maxInLayer: 1, id: 'bun_top'},

        ],
        burgerCompositionWithLayot: [],

        newLayer: [],

    }
  },


}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.content {
    height: 100%;
        // position: absolute;
        // top: 10%;
        // left: 0;
    .flex-container {

        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        // max-height: 600px;

        .title {
            width: min-content;
            font-family: 'OpenSans Regular';
            font-style: normal;
            font-size: 4.5em;
            line-height: 80px;  
            color: $black;
            z-index: 1;
    
        }

        .price-tag {

            @media (max-width: $xl) {
                margin: 12% 0 0 0;
                width: 100%;
                flex-basis: 100%;
                text-align: center;
            }
        }
    }

}
</style>