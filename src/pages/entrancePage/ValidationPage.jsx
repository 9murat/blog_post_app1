import * as yup from 'yup';

let validation = yup.object({
    name: yup.string().required("Name is a required field"),
    lastName: yup.string().required("Last Name is a required field"),
    phone: yup.string().min(11).required("Phone Number is a required field"),
    email: yup.string().email('Please enter as in the example : email@gmail.com').required("Email is a required field"),
    password: yup.string().min(6).required("Password is a required field"),

})


export default validation;



