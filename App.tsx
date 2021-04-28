import 'react-native-gesture-handler';
import React from 'react';
import { Navigator } from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: false,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     // background: 'grey'
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// }



export const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )



}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}