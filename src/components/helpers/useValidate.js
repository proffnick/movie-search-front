import { useState }  from "react";
export default function useValidate(){

  const [error, setError]     = useState("");

  const doValidation = (vObject, value = "", ) => {
    // where element is a ref object of the said element
    try {
     
      if(!vObject) {
        setError(" No validation object ");
        return false;
      }

      switch(vObject.type){
        case 'search':
          if(value.length > vObject.maxLength) {
            setError(" Title too long ");
            return false;
          }
          if(vObject.required && value.trim().length === 0) {
            setError("Please type in some title");
            return false;
          }

          setError("");
          return true;

        default:
        setError("Unknown error");
        return false; 
      }


    } catch (error) {
      setError(error.message);
      return false; 
    }
  }

  return {
    doValidation,
    error,
    setError
  }

}