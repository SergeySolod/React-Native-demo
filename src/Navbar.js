import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export const Navbar = props => {
    return (
        <View styles={styles.navbar}>
            <Text styles={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {

    },
    text: {

    }
});