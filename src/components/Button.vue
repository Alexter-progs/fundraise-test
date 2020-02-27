<template>
    <div 
        :class="{'Button__container': true, 'Button__container-active': isActive }"
        v-on:click="clickHandler()"
    >
        <span>{{ text }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync } from "vue-property-decorator";

@Component
export default class Button extends Vue {
   @Prop({default: ''}) 
   private readonly text?: string;
   @PropSync('isButtonActive', {default: false}) 
   private isActive?: boolean;

   private clickHandler(): void {
       console.log(1);
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .Button {
        &__container {
            height: 40px;
            background-color: #fafafa;
            border-radius: 5px;
            box-shadow: 0 1px 3px #00000040;
            cursor: pointer;
            user-select: none;
            padding: 0 15px 0 15px;
            font-size: 17px;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: background-color 0.15s ease-in-out
        }

        &__container:hover {
            background-color: #f7f7f7;
            transition: background-color 0.15s ease-in-out
        }

        &__container-active {
            background-image: linear-gradient(to bottom, #5087d9 0%, #4579c7 100%);
            color: #fff;
        }
    }
</style>
