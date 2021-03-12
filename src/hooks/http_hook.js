import {useCallback,useState} from 'react';
 export const useHttp = () => {
    const [error,setError] = useState(null);
    const request = useCallback(async(url, method = 'GET', headers = {}, body = null) => {
      try {
       const response = await fetch(url, {method,headers,body});
       const data = await response.json();
       if (!response.ok) {
           throw new Error(data.massage || 'Что-то пошло не так');
         }
      return data;
      } catch (e) {
          setError(e.massage);
          console.log("ERROR",e);
          throw e;
      }  

    },[]);

    const clearError = () => setError(null);
    return {request,error,clearError};

};