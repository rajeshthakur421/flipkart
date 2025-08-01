import { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState(localStorage.getItem('account') || '');
    useEffect(() => {
        if (account) {
            localStorage.setItem('account', account);
        } else {
            localStorage.removeItem('account');
        }
    }, [account]);
    
    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;