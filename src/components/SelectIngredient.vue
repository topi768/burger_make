<template>
    <div class="choice-of-ingredients" >
        <div  class="choice-of-ingredients__edge--left"></div>
        <div class="ingredient"  v-for="ingredient in $store.state.ingredients" :key="ingredient" >
            <img :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)">
            <h3>{{ingredient.name}}</h3>
            <div class="ingredient__quantity-selection" >
                <button @click="ingredient.count--;$store.commit('decrementBurgerComposition', ingredient); $store.getters.burgerCompositionWithLayot " class="quantity-selection__button minus" :disabled="ingredient.count <= 0" >-</button>  
                <p>{{ingredient.count}}</p> 
                <button @click="ingredient.count++;$store.commit('incrementBurgerComposition', ingredient); $store.getters.burgerCompositionWithLayot " class="quantity-selection__button plus">+</button>
            </div>
        </div>
        <div  class="choice-of-ingredients__edge--right"></div>
    </div>
</template>

<script>
export default {
  mounted(){
      //slide scroll
    const options = {
        root: document.querySelector('.choice-of-ingredients'),
        threshold: 1.0
    }
    const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
            document.querySelector('.choice-of-ingredients').classList.add('slide')
            if ( document.querySelector('.choice-of-ingredients').scrollLeft == 0) {
                document.querySelector('.choice-of-ingredients').scrollLeft += 50
            }else {
                 document.querySelector('.choice-of-ingredients').scrollLeft -= 50
            }
        }else {
            document.querySelector('.choice-of-ingredients').classList.remove('slide')
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector('.choice-of-ingredients__edge--left'))
    observer.observe(document.querySelector('.choice-of-ingredients__edge--right'))


  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

    .choice-of-ingredients{
        margin: 3.5% 0 0 0;
        width: 100%;
        padding: 5px;
        display: flex;
        // position: relative;
        @media (max-width: $xl) {
            overflow-x: scroll;
            scroll-behavior: smooth;
        }
        //text
        font-family: "OpenSans Regular";
        font-style: normal;
        font-weight: 600;
        font-size: 0.875em;
        line-height: 20px;
        text-align: center;
        text-transform: capitalize;
        .ingredient{
            display: block;
            width: 100%;
            margin: 0 10px;
            padding: 24px 0.5vw;
            border: 1px solid $blackSqueeze;
            border-radius: 32px;
            img {
                width: 104px;
                height: 59px;
            }
            &__quantity-selection{
                display: flex;
                align-items: center;
                justify-content: space-around;
                .quantity-selection__button {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background: $titanWhite;
                    border: 0px;
                    font-size: 1.3em;
                }
                .minus {
                    padding: 0 0 2px 0;
                }
            }
        }
        .choice-of-ingredients__edge--left {
            height: 1px;
            width: 1px;
            margin: 0 50px 0 5px;
            
        }
        .choice-of-ingredients__edge--right {
            height: 1px;
            width: 1px;
            margin: 50px 5px 0 50px;
        }
    }
</style>