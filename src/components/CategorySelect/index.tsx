import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { styles } from './styles';

type Props = {
    categorySelected: string;
    hasCheckBox?: boolean,
    setCategory: ((categoryId: string) => void);
}

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props) {

    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 30 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
    )
}