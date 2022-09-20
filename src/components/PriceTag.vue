<template>
    <div class="price-tag" >
        <h2 class="price-tag__title">Summary</h2>
        <div class="price-tag__price" >
            <p class="price-tag__value" >${{$store.getters.totalPrice}}</p>
            <button class="price-tag__button" @click="showDialog" >Checkout</button>
        </div>

        <transition name="gift-fade-text" >
            <p class="price-tag__gift" v-show="!$store.getters.giftShow" >Build a <em>$10</em> Burger and Get a Gift</p>
        </transition>
        
        <price-info ></price-info >
        <transition name="dialog-fade">
            <my-dialog v-model:show="dialogVisible" ></my-dialog>
        </transition>
        

    </div>
</template>

<script>
import PriceInfo from "@/components/PriceInfo.vue";

export default {
    components: {
        PriceInfo
    },
    data(){
        return {
            dialogVisible : false,
        }
    },
    methods: {
        showDialog() {
            document.querySelector("html").classList.add("lock")
            this.dialogVisible = true
       
        }
    },

}
</script>

<style lang="scss" scoped >
@import "@/assets/variables.scss";
//
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
//
.gift-fade-text-enter-active,
.gift-fade-text-leave-active {
  transition: all 0.5s ease;
}

.gift-fade-text-enter-from,
.gift-fade-text-leave-to {
  opacity: 0;
  transform: translateX(30px);
//   max-height: 0;
}
//
.price-tag {  
        position: relative;
        font-family: 'OpenSans Regular';
        font-style: normal;
        font-weight: 600;
        width: 26.23%;
        max-width: 405px;
        min-height: 280px;
        // max-height: 275px;
        @media (max-width: $md) {
            width: 100%;
            max-width: 100%;
        }
    &__title {
        font-size: 2.25em;
        line-height: 49px;
        color: $black;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &__price {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        max-height: 52px;

        .price-tag__value {
            margin: 0;
            display: block;
            font-weight: 800;
            font-size: 2.25em;
            color: $primary;
        }
        .price-tag__button {

            padding: 16px 59px;
            border-radius: 99px;
            border: none;
            background: $primary;
            cursor: pointer;
            //text
            font-size: 1em;
            line-height: 20px;
            color: $titanWhite;
        }
    }
    &__gift {

        max-height: 20px;
        font-weight: 400;
        font-size: 0.875em;
        line-height: 20px;
        em {
            color: $danger;
            font-style: normal;

        }
    }

}
</style>