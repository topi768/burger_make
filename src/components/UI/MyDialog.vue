<template >
    <div class="dialog" v-show="show"  @click.stop="hideDialog" >
        <div class="dialog__content " @click.stop>
            <div class="dialog__title">
                <h2>Checkout</h2>
                <div class="burger__btn" @click="hideDialog" >
                    <span class="burger__span"></span>
                </div>
            </div>

            <div class="dialog__flex-container">
                <div class="dialog__item" >
                    <h3>Your Name</h3>
                    <input class="dialog__value" value="Jerome Porter" type="text">
                </div>
                <div class="dialog__item" >
                    <h3>Phone Number</h3>
                    <input pattern="[0-9]{10}" class="dialog__value dialog__input--tel"  type="tel">
                </div>
                <div class="dialog__item" >
                    <h3>Shipping Address</h3>
                    <input class="dialog__value" type="text">
                </div>
                <div class="dialog__item" >
                    <h3>Time to Delivery</h3>
                    <select class="dialog__value select" name="select">
                        <option class="select__item" :value="i " v-for="i of 24" :key="i">
                            {{ i > 12? i - 12  + ' PM': i + ' AM' }}
                            <span class="select__tomorrow" >{{i < timeNow ? 'tomorrow': ''}}</span>
                        </option>
                    </select>
                </div>
            </div>
            <button @click="hideDialog" class="dialog__button dialog__button2" >Checkout</button>
            <button @click="hideDialog" class="dialog__button dialog__button1" >Cancel</button>
        </div>

    </div>

</template>

<script>
import IMask from 'imask';
export default {
    name: 'MyDialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            element: '',
            timeNow: new Date().getHours()
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
            document.querySelector("html").classList.remove('lock')
        },

    },
    mounted() {
        this.element = document.querySelector('.dialog__input--tel')
        let maskOptions = {
            mask: '(000)000-00-00'
        };
        let mask = IMask(this.element, maskOptions);
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.dialog {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(82, 67, 194, 0.9);
    backdrop-filter: blur(5px);
    position: fixed;
    z-index: 10000;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: left;
    // overflow-y:scroll;

    &__content {
        width: 40vw;
        min-width: 400px;
        position: relative;
        padding: 6%;
        border-radius: 16px;
        background: $white;
        @media(max-width: $xl) {
            width: 80vw;
            .dialog__value {
                width: 100%;
            }
        }
        .dialog__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: "OpenSans Regular";
            font-style: normal;


            h2 {
                display: block;
                margin: 0;
                font-weight: 600;
                font-size: 1.25em;
                line-height: 27px;
            }
            .burger__btn {
                width: 24px;
                height: 24px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 1001;
                .burger__span, .burger__span::before {
                    position: absolute;
                    display: block;
                    background: $black;
                    height: 2px;
                    width: 16px;

                }
                .burger__span {
                    transform: rotate(-45deg) ;
                    
                    &::before {
                        content: "";
                        transform:  rotate(90deg);
                    }
                }
            }
        }

        .dialog__flex-container {
            display: grid;
            gap: 16px ;
            grid-template-columns: repeat(2, 1fr);
            @media(max-width: $xl) {
                grid-template-columns: repeat(1, 1fr)
            }
            .dialog__item {

                padding: 8px 0;
                border: 1px solid $titanWhite;
                border-radius: 16px;
                h3 {
                    text-align-last: left;
                    white-space: nowrap;
                    font-weight: 400;
                    font-size:0.75em;
                    line-height: 16px;
                    color: $muted;
                    margin: 0;
                }
                input {
                    width: 70%;
                    // border: none;
                }
                input:focus {
                    outline:none;
                }
                .dialog__value {

                    font-family: "OpenSans Regular";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 0.875em;
                    line-height: 20px;
                    margin: 0;
                    border: none;
                }
                .select {
                    border: 0;
                    outline: 0;


                }

                &::before {
                    float: left;             
                    position: relative;
                    top: 50%; 
                    transform: translate(0, -50%)  ;
                    margin: 0 8px ;
                }
                &:nth-child(1)::before {
                    content: url('@/assets/ico/Group.svg');

                }
                &:nth-child(2)::before {
                    content: url('@/assets/ico/Group2.svg');

                }
                &:nth-child(3)::before {
                    content: url('@/assets/ico/Group1.svg');

                }
            }
        }
    }
    .dialog__button {

        border-radius: 99px;
        border: none;
        padding: 16px 23px;

        font-family: 'OpenSans Regular';
        font-style: normal;
        font-weight: 600;
        font-size: 1em;
        line-height: 20px;
        float: right;
        margin: 0 0 0 4%;
        cursor: pointer;
    }
    .dialog__button1 {
        background: $titanWhite;
        color: $primary;

    }
    .dialog__button2 {
        background: $primary;
        color:  $titanWhite;

    }
}
</style>