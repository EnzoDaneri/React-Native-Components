import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';


export const TextInputScreen = () => {

    const { onChange, form } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    const { isSubscribed } = form;


    const { theme: { colors, dividerColor } } = useContext(ThemeContext);



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : 'height'}
        >
            <ScrollView>
                <View style={{ ...styles.globalMargin, marginBottom: 100 }}>
                    <HeaderTitle title="TextInput" />
                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholder="Ingrese su nombre"
                        placeholderTextColor={dividerColor}
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholder="Ingrese su email"
                        placeholderTextColor={dividerColor}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'

                    />

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />


                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholder="Ingrese su teléfono"
                        placeholderTextColor={dividerColor}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType='phone-pad'
                    />

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <CustomSwitch
                        isOn={isSubscribed}
                        onChange={(value) => onChange(value, 'isSubscribed')}

                    />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 9,

    }
})