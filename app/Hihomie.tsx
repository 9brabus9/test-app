import React from 'react'
import { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import DataStore from './DataStore'

export default class Hihomie extends Component {
    public store = DataStore.dataStore;
    render() {
        return (
            <View style = {styles.main}>
                <View style = {styles.header}>
                    <View style={styles.navicon}>
                        <View style={styles.naviconchild}></View>
                    </View>
                    <Text>Welcome {this.store[1]}</Text>
                </View>
                <View style = {styles.container}><Text style={{fontSize: 30}}>Welcome to our page!</Text></View>
                <View style = {styles.footer}><Text style={{ color: 'white'}}>Copyright 2018</Text></View>
            </View>
        );
    }   
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E1E5F0',
    },
    container: {
       flex: 6,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#FBFCFF',
       fontSize: 50
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#42454F',
    },
    navicon: {
        width: 30,
        height: 30,
        position: 'relative',
    },
    naviconchild: {
        flex: 1
    }
});