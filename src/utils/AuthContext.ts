import { createContext } from 'react';
import type { PropsWithChildren } from 'react';

export const AuthContext = createContext(null)

export const AuthContextProvider = ({children}: PropsWithChildren) => {
    return(
        {children}
    )
}