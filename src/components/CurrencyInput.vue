<template>
  <div class="CurrencyInput__container">
    <div class="CurrencyInput__symbol">
      {{ donationForm.activeCurrency.symbol }}
    </div>
    <input
      class="CurrencyInput__input"
      type="text"
      pattern="[0-9]"
      maxLength="10"
      @input="inputHandler($event)"
      :value="inputValue"
      :placeholder="placeholder"
      @blur="blurHandler()"
      @focus="focusHandler()"
    />
    <select
      class="CurrencyInput__selector"
      @change="selectorChangeHandler($event)"
    >
      <option
        v-for="item in donationForm.currencies"
        :key="item.code"
        :value="item.code"
      >
        {{ item.code }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, PropSync } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import { DonationFormState } from "@/store/donationForm/types";

const namespace = "donationForm";

@Component
export default class CurrencyInput extends Vue {
  @State(namespace) donationForm!: DonationFormState;
  @Mutation("changedActiveCurrency", { namespace }) changedActiveCurrency!: any;
  @Mutation("changedCurrencyInputValue", { namespace })
  changedCurrencyInputValue!: any;

  @Watch("donationForm.currentPreset")
  onCurrentPresetChange(val: number) {
    this.inputValue = val;
  }

  @Watch("donationForm.currencyInputValue")
  onCurrencyInputValueChange(val: number, oldVal: number) {
    this.inputValue = val;
  }

  private inputValue = 0;
  private placeholder = "Other";

  created() {
    this.inputValue = this.donationForm.currentPreset;
  }

  focusHandler() {
    this.placeholder = "";
  }

  blurHandler() {
    this.placeholder = "Other";
  }

  selectorChangeHandler(event: any) {
    this.changedActiveCurrency(event.target.value);
  }

  inputHandler(event: any) {
    const newValue = event.target.value;
    const regex = /^\d*[1-9]\d*$/;
    if (!newValue) {
      this.changedCurrencyInputValue("");
    }

    if (regex.test(newValue.toString())) {
      this.inputValue = newValue;
      this.changedCurrencyInputValue(event.target.value);
    } else {
      let newv: string = newValue.toString();
      newv = newv.slice(0, newv.length - 1);
      event.target.value = parseInt(newv);
    }
  }
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
