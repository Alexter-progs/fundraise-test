import { MutationTree } from "vuex";
import { DonationFormState, Currency } from "./types";

export const mutations: MutationTree<DonationFormState> = {
  changedActiveCurrency(state, code) {
    const currency: Currency = state.currencies.filter(item => {
      return item.code === code;
    })[0];

    state.activeCurrency = { ...currency };

    let value = Math.floor(state.currencyInputValue * currency.rate);
    if (value > 100 && value % 100 !== 0) {
      value -= value % 100;
    } else if (value > 10 && value % 10 !== 0) {
      value -= value % 10;
    }

    state.currencyInputValue = value;
  },
  changedCurrencyInputValue(state, value) {
    state.currencyInputValue = value;
  },
  presetSelected(state, value) {
    state.currentPreset = value;
    state.currencyInputValue = value;
  },
  donated(state, value) {
    state.isDonated = value;
  }
};
