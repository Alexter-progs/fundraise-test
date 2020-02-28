<template>
  <div class="DonationForm__container">
    <div v-if="!donationForm.isDonated">
      <ButtonsGrid rows="3" columns="3" />
      <CurrencyInput class="DonationForm__currencyInput" />
      <div class="DonationForm__donateBtn" @click="donateClickHandler()">
        <span>Donate</span>
      </div>
    </div>
    <div v-else>
      Thanks for your donation
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { DonationFormState } from '@/store/donationForm/types';

import ButtonsGrid from "./ButtonsGrid.vue";
import Button from "./Button.vue";
import CurrencyInput from "./CurrencyInput.vue";

const namespace = "donationForm";

@Component({
  components: {
    ButtonsGrid,
    Button,
    CurrencyInput
  }
})
export default class DonationForm extends Vue {
  @State(namespace) donationForm!: DonationFormState;
  @Action('donate', {namespace}) donate: any;
  @Prop() private readonly msg!: string;

  donateClickHandler() {
    this.donate();
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
    max-width: 340px;
  }

  &__donateBtn {
    text-transform: uppercase;
    font-weight: bold;
    background-color: #5491eb;
    color: white;
    margin-top: 30px;

    height: 40px;
    border-radius: 5px; 
    box-shadow: 0 1px 3px #00000040;
    cursor: pointer;
    user-select: none;
    padding: 0 15px 0 15px;
    font-size: 17px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s ease-in-out;
  }

  &__donateBtn:hover {
    background-color: #2e71d5;
    transition: background-color 0.15s ease-in-out;
  }

  &__currencyInput {
    margin-top: 20px;
  }
}
</style>
