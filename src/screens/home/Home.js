import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {connect} from "react-redux";

const Home = props => {
    const goRequestStep1 = () => {
        props.navigation.navigate('Request1')
    }
    const goNew = () => {
        props.navigation.navigate('New')
    }
    const goCompleted = () => {
        props.navigation.navigate('Completed')
    }
    const goExecuted = () => {
        props.navigation.navigate('Executed')
    }
    const goFailed = () => {
        props.navigation.navigate('Failed')
    }
    const goCanceled = () => {
        props.navigation.navigate('Canceled')
    }

    return (
        <View style={style.center}>
            <Text>Домашняя страница</Text>
            <Button title='Создать заявку' onPress={goRequestStep1}/>
            <Button title='Заявки' onPress={goNew}/>
            <Button title='На оформлении' onPress={goCompleted}/>
            <Button title='Некорректные' onPress={goExecuted}/>
            <Button title='Заказы' onPress={goFailed}/>
            <Button title='Отмены' onPress={goCanceled}/>
        </View>
    )
}

Home.navigationOptions = {
    headerTitle: 'Домашняя страница'
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(null, {})(Home)