import React, { useContext, useState } from 'react';
import { Platform, Switch, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}



export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);

    const { theme: { colors } } = useContext(ThemeContext);


    const toggleSwitch = () => {

        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }


    return (
        <Switch
            trackColor={{ false: "red", true: colors.primary }}
            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}