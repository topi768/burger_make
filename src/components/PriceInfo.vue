<template>
    <div class="info" >
        <div class="info__item" >{{$store.getters.totalTime}} min</div>
        <div class="info__item" >{{$store.getters.totalOz}} oz</div>
        <div class="info__item" >{{$store.getters.totalKcal}} kcal</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

    .info {
        font-family: "OpenSans Regular";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding:  4% 3%;
        background: $titanWhite;
        border-radius: 32px;
        @media(max-width:$md) {
            margin: 10% 0 0 0;
            position: static;
        }   
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
</style>