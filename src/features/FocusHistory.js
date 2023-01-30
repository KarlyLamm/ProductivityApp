import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
    if(!history || !history.length) return <Text style={styles.title}>You have not completed any items yet</Text>;
    const renderItem = ({item})=> <Text style={styles.item}>- {item}</Text>
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Completed Focus Items:</Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: spacing.md,
        flex: 1
    },
    item:{
        paddingTop: spacing.sm,
        fontSize: fontSizes.md,
        color: colors.white
    },
    title:{
        color: colors.white,
        fontSize:fontSizes.md,
        fontWeight: 'bold'
    }
});