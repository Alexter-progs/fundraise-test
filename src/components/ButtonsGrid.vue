<template>
    <div class="ButtonsGrid__container">
    </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
    }
})
export default class ButtonsGrid extends Vue {
    private buttonProps: object[] = [];
    private readonly presets = [40, 100, 200, 1000, 2500, 5000];

    private readonly currencies = [
        {name: "US Dollar", code: "USD", symbol: "$", rate: 1},
        {name: "Euro", code: "EUR", symbol: "€", rate: 0.897597},
        {name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755},
        {name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993}
    ];

    private suggestion = 40;
    private currentCurrency = "USD";

    beforeMount() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        });
        const currencyOptions = this.currencies.filter(this.filterCurrency)[0];
        this.presets.forEach(preset => {
            this.buttonProps.push({
                text: `${formatter.format(preset)}`
            })
        });
    }

    filterCurrency(item: any) {
        return item.code === this.currentCurrency;
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
