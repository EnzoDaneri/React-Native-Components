import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const { isActive, isHappy, isHungry } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="switches" />

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>Is active</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>

            <View style={styles.switchRow}>
                <Text style={{ ...styles.switchText, color: colors.text }}>Is Hungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>

            <View style={styles.switchRow}>

                <Text style={{ ...styles.switchText, color: colors.text }}>Is Happy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />

            </View>

            <Text style={{ ...styles.switchText, color: colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 20,

    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
})