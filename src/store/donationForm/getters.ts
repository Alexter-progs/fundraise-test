import { GetterTree } from 'vuex';
import { DonationFormState} from './types';
import { RootState} from '../types';

export const getters: GetterTree<DonationFormState, RootState> = {
    currentCurrencySymbol(state): number {
        const activeCurrency = state.activeCurrency;
        return 123;
    }
}