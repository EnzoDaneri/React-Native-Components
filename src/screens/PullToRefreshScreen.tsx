import React, { useState, useContext } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const { theme: { colors, dividerColor } } = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('terminamos');
            setRefreshing(false);
            setData('Hello world');
        }, 4000);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={dividerColor}
                    colors={['white', 'red', 'orange']}
                    style={{ backgroundColor: colors.primary }}
                    title="refreshing"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {
                    data && <HeaderTitle title={data} />
                }



            </View>
        </ScrollView>
    )
}