import React, { useContext, useRef } from 'react';
import { Animated, View, Text, StyleSheet, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    const { theme: { colors } } = useContext(ThemeContext);


    return (

        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [
                    {
                        translateY: position
                    }
                ]
            }} />

            <View style={{ backgroundColor: colors.primary }}>
                <Button
                    title="FadeIn"
                    onPress={() => {
                        fadeIn();
                        startMovingPosition(-100)
                    }}
                />
            </View>


            <View style={{ marginTop: 20, backgroundColor: colors.primary }} >
                <Button
                    title="FadeOut"
                    onPress={fadeOut}
                />
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: 'purple',
        width: 150,
        height: 150
    }
});