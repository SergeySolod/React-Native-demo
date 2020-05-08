import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

class Completed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Дата', 'Юр. лицо', 'Стоимость', 'Кол-во'],
            tableData: [
                ['10 ноября', 'ИП Олег', '5000', '4'],
                ['10 мая', 'ИП Катя', '9000', '9'],
                ['10 июля', 'ООО Ромашка', '2000', '1'],
                ['10 августа', 'ИП Петя', '1000', '9']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

export default Completed