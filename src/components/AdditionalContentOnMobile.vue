<template>

    <burger-composition />

    <select-ingredient></select-ingredient>
    <price-tag />



</template>
<script>
import BurgerComposition from "@/components/BurgerComposition.vue";
import PriceTag from "@/components/PriceTag.vue";
import SelectIngredient from "@/components/SelectIngredient";
import PriceInfo from "@/components/PriceInfo";


export default {
    components: {
        BurgerComposition, PriceTag, SelectIngredient, PriceInfo
    },
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    
}
</style>