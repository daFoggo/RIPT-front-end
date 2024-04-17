import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

export const useForm = () => {
    return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
    const [formType, setFormType] = useState("Đơn xin nghỉ");

    function handleSetFormType(event){
        setFormType(event.target.textContent);
    }

    return(
        <FormContext.Provider value={{ formType, setFormType, handleSetFormType }}>
            {children}
        </FormContext.Provider>
    )
}

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
}