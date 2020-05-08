import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from "react-redux";
import {requestCanceledFirst} from "../../../store/reducers/tables-reducers/canceled";

const Canceled = props => {
    useEffect(() => {
        props.requestCanceledFirst()
    }, [])
    console.log(props.canceled)
    return (
        <View>
            {props.canceled.map(request => (
                <View>
                    <Text>Имя клиента: {request.client.name}</Text>
                </View>
            ))}
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

Canceled.navigationOptions = {
    headerTitle: 'Отменённые заявки'
}

let mapStateToProps = state => {
    return {
        canceled: state.canceled.request
    };
};

export default connect(mapStateToProps, {requestCanceledFirst})(Canceled)
