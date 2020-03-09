import { fetchWalletTnxs } from './services/paymentQiwiService';
import { getVacantWallet } from './services/qiwiWalletService';


export const test = async () => {
    try {
        const wallet = await getVacantWallet('5b461d6eda8dc00e0123b986', 14000);
        const response = await fetchWalletTnxs(wallet, new Date(), '838383');
        console.log(response);
    } catch(err) {
        console.error(err);
    }
    
};

test();
