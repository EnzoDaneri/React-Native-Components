import React from 'react';
import { View, Alert, Button, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Título",
            "Este es el mensaje de la alerta",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel pressed'),
                    style: 'cancel',

                },
                {
                    text: 'Ok',
                    onPress: () => console.log('Ok pressed')
                },

            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss')
            }
        )
    }

    // Sólo para IOS funciona
    // const showPrompt = () => {
    //     Alert.prompt(
    //         'Está seguro?'
    //     )
    // }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />
            <View style={{ height: 10 }} />
            <Button
                title="Mostrar Prompt"
                onPress={showAlert}
            />
        </View>
    )
}