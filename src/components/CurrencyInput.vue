<template>
    <div class="CurrencyInput__container">
        <div class="CurrencyInput__symbol">$</div>
        <input
            class="CurrencyInput__input"
        />
        <select class=CurrencyInput__selector>
            <option value="1">USD</option>
            <option value="2">EUR</option>
            <option value="3">GBP</option>
            <option value="4">RUB</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .CurrencyInput {
        &__container {
            border: 1px solid #9196a2;
            border-radius: 5px;
            height: 50px;
            display: flex;
            background-color: #fff;
            display: flex;
            align-items: center;
            padding: 0 0 0 10px;
        }

        &__container:focus {
            border: 1px solid #4c85db;
        }

        &__input {
            font-family: "Lato", Helvetica Neue, Helvetica, Arial, sans-serif;
            display: block;
            border: none;
            padding: 0 10px 0 10px;
            margin: 0;
            background-color: transparent;
            background-image: none;
            appearance: none;
            font-weight: 400;
            caret-color: #7777de;
            color: #4c85db;
            font-size: 36px;
            width: 100%;
        }

        &__input:focus {
            outline: none;
        }

        &__symbol {
            font-size: 21px;
            color: #515151;
            cursor: default;
        }

        &__selector {
            font-family: "Lato", Helvetica Neue, Helvetica, Arial, sans-serif;
            border: none;
            font-size: 16px;
            line-height: 17px;
            border-radius: 0 5px 5px 0; 
            height: 50px;
            color: #515151;
            cursor: pointer;
        }

        &__selector > option {
            background-color: white;
            color: initial;
        }

        &__selector:focus {
            border: none;
            outline: none;
        }

        &__selector:hover {
            background-color: #ededed;
        }
    }
</style>
