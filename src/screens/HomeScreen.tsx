import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListMenuItem } from '../components/FlatListItemMenu';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';




export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();



    const renderMenuItem = (menuItem: MenuItem) => {
        return (
            <View>
                <Text> {menuItem.name} - {menuItem.icon} </Text>
            </View>
        )
    }



    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>


            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />

        </View>
    )
}