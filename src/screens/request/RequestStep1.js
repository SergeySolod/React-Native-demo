import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export const RequestStep1 = props => {
    const [name, changeName] = useState()
    const [phone, changePhone] = useState()
    const [email, changeEmail] = useState()
    const [inn, changeInn] = useState()
    const [company, changeCompany] = useState()

    const goRequest2 = () => {
        props.navigation.navigate('Request2')
    }
    return (
        <View style={style.center}>
            <Text>Создание заявки шаг 1</Text>
            <TextInput
                value={name}
                onChangeText={changeName}
                style={style.input}
                placeholder='Введите имя'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <TextInput
                value={phone}
                onChangeText={changePhone}
                style={style.input}
                placeholder='Введите телефон'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <TextInput
                value={email}
                onChangeText={changeEmail}
                style={style.input}
                placeholder='Введите email'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <TextInput
                value={inn}
                onChangeText={changeInn}
                style={style.input}
                placeholder='Введите ИНН'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <TextInput
                value={company}
                onChangeText={changeCompany}
                style={style.input}
                placeholder='Введите название компании'
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={64}
            />
            <Button style={style.buttons} title='Далее' onPress={goRequest2}/>
        </View>
    )
}

RequestStep1.navigationOptions = {
    headerTitle: 'Создание заявки шаг 1'
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

export default RequestStep1