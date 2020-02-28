import { ActionTree } from "vuex";
import { DonationFormState, Currency } from "./types";
import { RootState } from "../types";

export const actions: ActionTree<DonationFormState, RootState> = {
  async donate({ commit, state }): Promise<void> {
    const data = {
      amount: state.currencyInputValue,
      currency: state.activeCurrency.code
    };

    console.log(data);

    await fetch('/api/donate', { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    //console.log('123');

    commit('donated', true);
  }
};
