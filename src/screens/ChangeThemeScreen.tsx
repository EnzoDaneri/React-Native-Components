import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';
import { darkTheme, lighTheme } from '../context/themeContext/themeReducer';

export const ChangeThemeScreen = () => {

    const { setLightTheme, setDarkTheme, theme: { colors, currentTheme } } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />
            <TouchableOpacity
                onPress={currentTheme === 'light' ? setDarkTheme : setLightTheme}
                style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,

                }}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22,

                }} >{currentTheme === 'light' ? 'dark' : 'light'}</Text>
            </TouchableOpacity>
        </View>
    )
}