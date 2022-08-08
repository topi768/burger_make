<template>
    <div class="container">
        <div class="content" >
            <div class="flex-container" >
                <h1 class="title">Make Your Burger</h1>
                    <!-- <burger-composition :burgerComposition='burgerComposition'></burger-composition> -->
                <div class="price-tag">

                </div>
            </div>
            <div class="choice-of-ingredients" >

                <div  class="choice-of-ingredients__edge--left"></div>
                <div class="ingredient"  v-for="ingredient in ingredients" :key="ingredient" >
                    <img :src="require(`@/assets/img/makeBurger/ingredients/${ingredient.name}.png`)">
                    <h3>{{ingredient.name}}</h3>
                    <div class="ingredient__quantity-selection" >
                        <button @click="ingredient.count--;burgerComposition.splice(burgerComposition.findIndex(n => n.name == ingredient.name),1 )" class="quantity-selection__button minus" :disabled="ingredient.count <= 0" >-</button>  
                        <p>{{ingredient.count}}</p> 
                        <button @click="ingredient.count++;burgerComposition.push(ingredient)" class="quantity-selection__button plus">+</button>
                    </div>
                </div>
                <div  class="choice-of-ingredients__edge--right"></div>

            </div>
        </div>
    </div>

</template>
<script>
import BurgerComposition from "@/components/BurgerComposition";
export default {
    components: {
        BurgerComposition
    },
  data() {
    return {
        // countIngredients: 8,
        ingredients:[

            {name:'cutlet', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1},
            {name:'mayo', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -55, maxInLayer: 1},
            {name:'onion', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 3},
            {name:'tomato', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1},
            {name:'cucumber', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 3},
            {name:'cheese', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -50, maxInLayer: 1},
            {name:'salad', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -55, maxInLayer: 1},
            {name:'bun', count:0, price: 2, kcal: 249, time: 4, oz: 0.2, negativeMargin: -15, maxInLayer: 1},
        ],
        burgerComposition: [],
        burgerCompositionWithLayot: [],
        newLayer: [],
        repeat: 0,

    }
  },
  methods: {

  },
  computed: {

  },
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
    methods: {

    },
    watch: {
        burgerComposition: {
            handler(oldValue, newValue) {
            this.burgerCompositionWithLayot = []
                for (let i = 0; i < this.burgerComposition.length ;) {
                    

                    if (this.burgerComposition[i+2] != undefined && this.burgerComposition[i].name == this.burgerComposition[i+1].name && this.burgerComposition[i].name == this.burgerComposition[i+2].name)  {
                        this.newLayer = this.burgerComposition.slice(i, i+3, ); // почему  +3??77
                        this.burgerCompositionWithLayot.push(this.newLayer);
                        i+= 3
                    }else if (this.burgerComposition[i+1] != undefined && this.burgerComposition[i].name == this.burgerComposition[i+1].name){
                        this.newLayer = this.burgerComposition.slice(i, i+2, );
                        this.burgerCompositionWithLayot.push( this.newLayer);
                        i += 2 
                    }else {
                        this.newLayer = this.burgerComposition.slice(i ,i+1 );
                        this.burgerCompositionWithLayot.push(this.newLayer);
                        i += 1
                    }

                }
                // let burgerCompositionWithLayot = this.burgerComposition.map(ingredient => {
                //     return ingredient
                // })
                console.log(this.burgerCompositionWithLayot);

            },
            deep: true
        }

    }


}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.content {
    .flex-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .title {
            width: min-content;
            font-family: 'OpenSans Regular';
            font-style: normal;
            font-size: 4.5rem;
            line-height: 80px;  
            color: $black;
            z-index: 1;
    
        }

        .price-tag {
            width: 26.23%;
            height: 100px;
            background: red;
        }
    }
    .choice-of-ingredients{ 
        width: 100%;
        padding: 5px;
        display: flex;
        position: relative;
        @media (max-width: $xl) {
            overflow-x: scroll;
            scroll-behavior: smooth;
        }
        //text
        font-family: "OpenSans Regular";
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
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
                    font-size: 1.3rem;
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
}
</style>