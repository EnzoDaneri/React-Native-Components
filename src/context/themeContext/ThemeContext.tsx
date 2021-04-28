import React, { createContext, useReducer, useEffect } from 'react';
import { AppState, Appearance } from 'react-native';
import { ThemeState, themeRudcer, lighTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;

}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(
        themeRudcer,
        (Appearance.getColorScheme() === 'dark') ? darkTheme : lighTheme);

    // Sólo funciona en IOS por ahora esto
    // useEffect(() => {
    //     (colorScheme === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme();
    // }, [colorScheme]);

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme();
            }
        })
    }, []);

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('dark')
    };


    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('light')
    };


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}