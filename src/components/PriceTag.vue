<template>
    <div class="price-tag" >
        <h2 class="price-tag__title">Summary</h2>
        <p class="price-tag__price" >${{$store.getters.totalPrice}}</p>
        <button class="price-tag__button">Checkout</button>
        <p class="price-tag__gift" v-show="!$store.state.giftShow" >Build a <em>$10</em> Burger and Get a Gift</p>
        <div class="info" >
            <div class="info__item" >{{$store.getters.totalTime}} min</div>
            <div class="info__item" >{{$store.getters.totalOz}} oz</div>
            <div class="info__item" >{{$store.getters.totalKcal}} kcal</div>

        </div>
    </div>


</template>

<script>
export default {
    data(){
        return {
        }
    }
}
</script>

<style lang="scss" scoped >
@import "@/assets/variables.scss";

.price-tag {
        font-family: 'OpenSans Regular';
        font-style: normal;
        font-weight: 600;
        width: 26.23%;
        max-width: 405px;
        // max-height: 275px;

    &__title {
        font-size: 2.25em;
        line-height: 49px;
        color: $black;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &__price {
        font-weight: 800;
        font-size: 2.25em;
        color: $primary;
    }
    &__button {
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
    &__gift {
        font-weight: 400;
        font-size: 0.875em;
        line-height: 20px;
        em {
            color: $danger;
            font-style: normal;

        }
    }
    .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5%;

    /* primary/titan white */

    background: $titanWhite;
    border-radius: 32px;
        .info__item {
            font-size: 0.875em;
            line-height: 20px;
            color: $black;
            display: flex;
            align-items: center;
            padding: 1px 0 0 0;
            justify-content: space-between;
        }
        .info__item:nth-child(1)::before {
            content: url('@/assets/ico/min.svg');
            margin: 0 8px 0 0 ;
        }
        .info__item:nth-child(2)::before {
            content: url('@/assets/ico/oz.svg');
            margin: 0 8px 0 0 ;
        }
        .info__item:nth-child(3)::before {
            content: url('@/assets/ico/kcal.svg');
            margin: 0 8px 0 0 ;
        }
    }
}
</style>