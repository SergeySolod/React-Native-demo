import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Executed from "../executed/Executed";

export const Failed = props => {
    return (
        <View style={style.center}>
            <Text>Failed page</Text>
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

Failed.navigationOptions = {
    headerTitle: 'Некорректные заявки'
}

export default Failed