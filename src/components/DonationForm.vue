<template>
    <div class="DonationForm__container">
      <div>
        <ButtonsGrid rows="3" columns="3"/>
        <CurrencyInput class="DonationForm__currencyInput"/>
        <Button text="Donate" class="DonationForm__donateBtn"/>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonsGrid from "./ButtonsGrid.vue";
import Button from "./Button.vue";
import CurrencyInput from "./CurrencyInput.vue";

@Component({
  components: {
    ButtonsGrid,
    Button,
    CurrencyInput
  }
})
export default class DonationForm extends Vue {
  @Prop() private readonly msg!: string;
  
  async created() {
    const res = await fetch('/api/donations');
    const donation = await res.text();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.DonationForm {
  &__container {
    border-radius: 5px;
    box-shadow: 0 0 2px #00000040;
    padding: 30px 30px 25px 30px;
    background-color: #f5f5f5;
  }

  &__donateBtn {
        text-transform: uppercase;
        font-weight: bold;
        background-color: #4c85db;
        color: white;
        margin-top: 30px;
    }

  &__donateBtn:hover {
      background-color: #2e71d5;
  }

  &__currencyInput {
    margin-top: 20px;
  }
}
</style>
