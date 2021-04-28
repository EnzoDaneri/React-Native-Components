import React, { useContext } from 'react';
import { View, SectionList, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const SectionListScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList
                sections={casas}
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                ListHeaderComponent={() => <HeaderTitle title="SectionList" />
                }
                ListFooterComponent={() => <HeaderTitle title={"Total de Casas: " + casas.length} />}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )

                }
                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}

            />



        </View>
    )
}