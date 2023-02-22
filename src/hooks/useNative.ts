import { useToast } from 'vue-toastification';

const toast = useToast();
/**
 * Копирование в буфер
 * @param {string} payload строка которая поместить в буфер
 */
const copyToClipboard = (payload:string) => {
    navigator.clipboard.writeText(payload)
    toast.success('Copied')
}

export { copyToClipboard }