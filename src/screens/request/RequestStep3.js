import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export const RequestStep3 = props => {
     const goRequest4 = () => {
        props.navigation.navigate('Request4')
    }
    return (
        <View style={style.center}>
            <Text>Создание заявки шаг 3</Text>
            <Text>Количество: 5 карт</Text>
            <Text>Сумма: 10000 рублей</Text>
            <Text>Скидка: 0%</Text>
            <Button style={style.buttons} title='Оформить' onPress={goRequest4}/>
        </View>
    )
}

RequestStep3.navigationOptions = {
    headerTitle: 'Создание заявки шаг 3'
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

export default RequestStep3