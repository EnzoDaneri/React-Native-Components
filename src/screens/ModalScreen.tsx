import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal" />
            <Button
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
            />


            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >

                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ backgroundColor: 'white', width: 200, height: 200, justifyContent: 'center', alignItems: 'center', elevation: 10, borderRadius: 10 }}>
                        <HeaderTitle title="Modal" />
                        <Text style={{ marginVertical: 20 }}>Cuerpo del modal</Text>


                        <Button
                            title="Cerrar"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>



        </View>
    )
}