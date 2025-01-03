import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
export const useGlobalContext = () => useContext(GlobalContext);