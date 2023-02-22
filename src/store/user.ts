import { $axios, apiList } from '@/api';
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',

    state: () => ({
        user: undefined
    }),

    actions: {
        getToken (payload:string) {
            return new Promise((resolve, reject) => {
                $axios({
                    method: apiList.auth.getToken.method,
                    url: apiList.auth.getToken.uri,
                    data: {
                        username: payload
                    }
                })
                .then((response:any) => {
                    $axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
                    document.cookie = `token=${response.data.jwt}`
                })
            })
        }
    },

    getters: {
        userData: state => state.user
    }
})