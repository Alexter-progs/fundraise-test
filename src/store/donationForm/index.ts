import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { DonationFormState, Currency } from "./types";
import { RootState } from "./../types";

export const state: DonationFormState = {
  activeCurrency: { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
  currencyInputValue: 40,
  currencies: [
    { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
    { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
    { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
    { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 }
  ],
  amountPresets: [40, 100, 200, 1000, 2500, 5000],
  currentPreset: 40,
  isDonated: false
};

const namespaced = true;

export const donationForm: Module<DonationFormState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
