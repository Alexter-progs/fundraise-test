export interface Currency {
    name: string;
    code: string;
    symbol: string;
    rate: number;
}

export interface DonationFormState {
    activeCurrency: Currency;
    currencyInputValue: number;
    currencies: Currency[];
    amountPresets: number[];
    currentPreset: number;
}