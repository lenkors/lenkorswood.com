import { defineStore } from 'pinia';
import axios from 'axios';
import { DonatePayload } from '@/types/apiTypes';
import { showServerErrors } from '@/api';
import CryptoJS from "crypto-js";

export const useMainStore = defineStore({
    id: 'main',

    state: () => ({
        
    }),

    actions: {
        /**
         * Создание донатного инвойса 
         */
        createDonateInvoice (payload: DonatePayload) {
            return new Promise<void>((resolve, reject) => {
                const date = new Date();
                const timeStamp = date.getTime() / 1000;
                const signature =  CryptoJS.HmacSHA256(
                    timeStamp +
                    'POST' +
                    'invoices' +
                    {
                        reference: `donate - ${date}`,
                        description: 'Donate',
                        email: payload.email,
                        amount: payload.amount,
                        back_url: import.meta.env.VITE_APP_API_HOST
                    },
                    import.meta.env.VITE_APP_CRYPT_APP_SECRET_TOKEN
                ).toString()

                axios({
                    url: `${import.meta.env.VITE_APP_DONATE_SERVICE_API}/api/v1/invoices`,
                    method: 'POST',
                    headers: {
                        'X-Token': import.meta.env.VITE_APP_CRYPT_APP_TOKEN,
                        'X-Timestamp': timeStamp,
                        'X-Signature': signature
                    },
                    data: {
                        reference: `donate - ${date}`,
                        description: 'Donate',
                        email: payload.email,
                        amount: payload.amount,
                        back_url: import.meta.env.VITE_APP_API_HOST
                    }
                })
                .then((res: any) => {
                    resolve(res.data)
                })
                .catch((err) => {
                    showServerErrors(err);
                    reject(err);
                })
            })
        }
    }
}) 