import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Toast = () => {
    const showToast = () => {
        toast.success('Başarılı bildirim!', {
            position: 'top-right',
            autoClose: 3000, // 3 saniye sonra otomatik olarak kapanır
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
}