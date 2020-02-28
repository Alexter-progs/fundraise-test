<template>
    <div class="ButtonsGrid__container">
        <template v-for="(prop, index) in buttonProps">
            <Button
                :key="index"
                :text="prop.text"
                :amount="prop.value"
            />
        </template>
    </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from 'vuex-class';
import Button from "./Button.vue";
import { DonationFormState } from "@/store/donationForm/types";

const namespace = "donationForm";

@Component({
    components: {
        Button
    }
})
export default class ButtonsGrid extends Vue {
    @State(namespace) donationForm!: DonationFormState;
    @Action('fetchData', {namespace}) fetchData!: any;
    //@Getter('inputValue', {namespace}) inputValue!: string;
    @Watch('donationForm.activeCurrency')
    onActiveCurrencyChange(val: number, oldVal: number) {
       this.buttonProps = this.getButtonProps();
    }

    private buttonProps: object[] = [];

    beforeMount() {
        this.buttonProps = this.getButtonProps();
    }

    getButtonProps() {
        const buttonProps: any = [];
        this.donationForm.amountPresets.forEach(preset => {
            const symbol = this.donationForm.activeCurrency.symbol;
            const rate = this.donationForm.activeCurrency.rate;
            const amount = this.formatNumber(preset * rate);
            buttonProps.push({
                text: `${symbol} ${amount}`,
                value: preset
            })
        });

        return buttonProps;
    }

    formatNumber(value: number) {
        value = Math.floor(value);
        if (value > 100 && value % 100 !== 0) {
             value -= value % 100;
        } else if (value > 10 && value % 10 !== 0) {
            value -= value % 10;
        }

        return value.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ButtonsGrid {
    &__container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;     
    }
}
</style>
