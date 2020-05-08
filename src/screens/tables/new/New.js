import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Failed from "../failed/Failed";

export const New = props => {
    return (
        <View style={style.center}>
            <Text>New page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

New.navigationOptions = {
    headerTitle: 'Новые заявки'
}

export default New