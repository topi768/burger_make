<template>
    <div class="burger-composition" >
          <img v-for="ingredient in burgerComposition" :key="ingredient" :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)">
          <!-- {{burgerComposition}} -->
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

        // burgerComposition: [{name:'bun', count:0, price: 2, kcal: 249, time: 4, oz: 0.2}]

    }
  },
}
</script>

<style lang="scss" scoped>

</style>