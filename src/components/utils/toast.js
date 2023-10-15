import { toast } from "react-toastify";



export const showToast = (message, options = {}) => {
    toast(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options, // Ekstra seçenekleri burada geçmek için kullanabilirsiniz
    });
  };


