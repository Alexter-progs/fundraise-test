<template>
    <div class="CurrencyInput__container">
        <input
            class="CurrencyInput__input"
        />
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
            box-sizing: content-box;
        }

        &__container:focus {
            border: 1px solid #4c85db;
        }

        &__input {
            display: block;
            border: none;
            padding: 0;
            margin: 0;
            background-color: transparent;
            background-image: none;
            appearance: none;
            font-weight: 400;
            caret-color: #7777de;
            color: #4c85db;
            font-size: 36px;
        }

        &__input:focus {
            outline: none;
        }
    }
</style>
