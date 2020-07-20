// write your custom hook here to control your checkout form
import { useState } from "react";


export const useForm = () => {
    
    
    const initialValue = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      };



    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };



      return [showSuccessMessage, handleChanges, values, setShowSuccessMessage];

}