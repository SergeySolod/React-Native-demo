import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export const RequestStep4 = props => {
    const goHome = () => {
        props.navigation.navigate('Home')
    }
    return (
        <View style={style.center}>
            <Text>Поздравляем! Ваша заявка оформлена!</Text>

            <Button style={style.buttons} title='На главную' onPress={goHome}/>
        </View>
    )
}

RequestStep4.navigationOptions = {
    headerTitle: 'Создание заявки шаг 4'
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default RequestStep4