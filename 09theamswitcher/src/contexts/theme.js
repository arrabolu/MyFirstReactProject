import { useContext , createContext} from "react";

//context creation
export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : ()=>{},
    lightTheme : ()=>{},
})

// context Provider
export const ThemeProvider = ThemeContext.Provider

//custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}