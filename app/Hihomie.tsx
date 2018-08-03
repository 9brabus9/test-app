import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import DataStore from './DataStore'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default class Hihomie extends Component {
    public store = DataStore.dataStore;
    public notes = DataStore.notes;

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.navicon}>
                        <Text style={styles.btnLineTop}></Text>
                        <Text style={styles.btnLineMiddle}></Text>
                        <Text style={styles.btnLineBottom}></Text>
                    </View>
                    <Text style={styles.typoitext}>All notes</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <TextInput placeholder={'Search'} style={styles.textinput}></TextInput>
                    </View>
                    <View style={styles.itemWrapper}>
                        {notes.map((item: any) => {
                                return (
                                    <View style={styles.item}>
                                        <View style={styles.itemContentWrap}>
                                            <View style={styles.itemLabelWrap}>
                                                <View style={{ borderTopColor: item.color,
                                                    paddingTop: 5,
                                                    borderLeftColor: item.color,
                                                    borderRightColor:item.color,
                                                    borderTopWidth: 3,
                                                    borderBottomWidth: 3,
                                                    borderRightWidth: 5,
                                                    borderLeftWidth: 5,
                                                    borderBottomColor: 'transparent'}}>

                                                </View>
                                            </View>
                                            <View style={styles.itemDataWrap}>
                                                <Text>{item.data}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.itemDateWrap}>
                                            <Text style={{color: '#afafaf', fontSize: 14}}>{item.date}</Text>
                                        </View>
                                    </View>
                                );
                            },
                        )}

                    </View>
                </View>
                <View style={styles.newNote}>
                    <View style={styles.buttonStyle}>
                        <Icon.Button name="plus" backgroundColor="white"  color = '#297BAF' size={20} iconStyle={{position: 'relative', marginRight: 0}}>
                        </Icon.Button>
                        <Text style={{fontSize: 10, position: 'relative',top: -10}}>New note</Text>
                    </View>
                </View>
                <View style={styles.footer}><Text style={{color: 'white'}}>Copyright 2018</Text></View>
            </View>
        );
    }
}

const notes = [

    {
        id: 323,
        label: 'work',
        date: '1 Jan 0000',
        data: 'hi my name is Vasia, i am from Zimbabve',
        color: 'red'

    },
    {
        id: 123,
        label: 'travel',
        date: '1 Jan 0000',
        data: 'hi my name is Petia, i am going to visit Jamaica but i will not be let in and will be sent back in ass',
        color: 'orange'

    },
    {
        id: 123,
        label: 'travel',
        date: '1 Jan 0000',
        data: 'hi my name is Petia, i am going to visit Jamaica but i will not be let in and send back in ass',
        color: 'orange'

    }];

const styles = StyleSheet.create({
    butt: {


    },
    buttonStyle: {
        flex: 0.6,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    newNote: {
        flex: 1,
        paddingTop:10,
        paddingLeft: 130,
        paddingRight: 130,
        paddingBottom: 10,
        backgroundColor: '#FBFCFF'

    },
    itemContentWrap: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingRight: 10
    },
    itemDateWrap: {
        paddingLeft: 10,
    },
    itemLabelWrap: {
        paddingTop: 4
    },
    itemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 120,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    itemDataWrap: {
        height: 100,
        overflow: 'hidden',
        marginLeft: 5
    },
    item: {
        width: 165,
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
        padding: 10,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: 13
    },
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 15,
        height: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    container: {
        flex: 8,
        position: 'relative',
        backgroundColor: '#FBFCFF',
        fontSize: 50,
        flexDirection: 'column'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#42454F',
    },
    navicon: {
        width: 25,
        height: 20,
        marginRight: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    btnLineTop: {
        width: 25,
        height: 2,
        backgroundColor: '#1186cc',
    },
    btnLineMiddle: {
        width: 25,
        height: 2,
        backgroundColor: '#1186CC',
    },
    btnLineBottom: {
        width: 25,
        height: 2,
        backgroundColor: '#1186CC',
    },
    naviconchild: {
        flex: 1
    },
    typoitext: {
        fontSize: 18
    },
    textinput: {
        marginRight: 15,
        paddingLeft: 15,
        paddingRight: 15,
        height: 35,
        marginLeft: 15,
        backgroundColor: '#e8e5e9',
        borderRadius: 20,
        marginBottom: 10
    },


});