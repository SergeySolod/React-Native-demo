import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = props => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        props.onSubmit('Test todo')
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Введите название дела...'
            />
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})