import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Completed from "../completed/Completed";

const Executed = props => {
    return (
        <View style={style.center}>
            <Text>Executed page</Text>
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

Executed.navigationOptions = {
    headerTitle: 'Законченные заявки'
}

export default Executed