import { createContext, useContext } from "react";
import data from "../data/formData";

const FormContext = createContext(undefined);

export const FormProvider = ({ children }) => {
  return (
    <FormContext.Provider value={ data }>{children}</FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
