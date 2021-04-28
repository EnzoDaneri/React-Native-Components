import React, { useState, useContext } from 'react';
import { View, Animated, ActivityIndicator, ImageStyle, StyleProp } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri?: string;
    style?: StyleProp<ImageStyle>;
}

export const FaInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const { theme: { colors } } = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && <ActivityIndicator color={colors.primary} size={30} style={{ position: 'absolute' }} />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>



    )
}