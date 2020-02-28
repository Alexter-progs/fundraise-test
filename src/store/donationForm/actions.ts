import { ActionTree } from 'vuex';
import { DonationFormState, Currency} from './types';
import { RootState } from '../types';

export const actions: ActionTree<DonationFormState, RootState> = {
    fetchData({ commit }): any {
        return 'fetched data';
    }
}