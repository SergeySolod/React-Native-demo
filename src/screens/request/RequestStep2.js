import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export const RequestStep2 = props => {
    const [par, changePar] = useState()
    const [value, changeValue] = useState()

    const goRequest3 = () => {
        props.navigation.navigate('Request3')
    }
    return (
        <View style={style.center}>
            <Text>Создание заявки шаг 2</Text>
            <TextInput
                value={par}
                onChangeText={changePar}
                style={style.input}
                placeholder='Сумма'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <TextInput
                value={value}
                onChangeText={changeValue}
                style={style.input}
                placeholder='Количество'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <Button title='Далее' onPress={goRequest3}/>
        </View>
    )
}

RequestStep2.navigationOptions = {
    headerTitle: 'Создание заявки шаг 2'
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default RequestStep2