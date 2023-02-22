import axios, { AxiosError } from 'axios';
import { useToast } from 'vue-toastification';

const apiList = {
  auth: {
    getToken: {
      method: 'POST',
      uri: '/auth/get-token'
    }
  }
};

const toast = useToast();

/**
 * Обертка тоста с ошибкой (уже с иконкой)
 * @param text текст ошибки
 */
const errorToastInit = (text:string) => {
  toast.error(text, {icon: 'X', timeout: 6000})
};

axios.defaults.withCredentials = true;

const $axios = axios.create({
  baseURL: (!!import.meta.env.VITE_APP_API_HOST ? import.meta.env.VITE_APP_API_HOST : 'https://sheepy-api.cpay.io')
})

// $axios.interceptors.response.use((response) => Promise.resolve(response), (error) => {
//   authUserHandler(error)
//   systemPageHandler(error)
// return Promise.reject(error)
// });

$axios.defaults.headers.common['Accept'] = 'application/json';
$axios.defaults.headers.common['Content-Type'] = 'application/json';
$axios.defaults.headers.common['Content-type'] = 'application/json';

/**
 * Запускает toastification по заданным ошибкам
 * @param error Axios Promise объект Ошибки 
 */
const showServerErrors = (error:AxiosError<any>) => {
    if (!!error?.response) {
      const { response } = error;
      if (response.status === 429) {
        errorToastInit(response.data?.message ?? 'Server Error' )
      } else { 
        !!response.data?.errors ? Object.keys(response.data?.errors)
        .map(el => {
          errorToastInit(response.data?.errors[el][0])
        }) : Object.keys(response.data).map(el => errorToastInit(response.data[el]))
      }
    }
}

export { showServerErrors, $axios, errorToastInit, apiList }