import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Progress from 'react-native-progress';



export default function EmailVal() {

    const navigation = useNavigation();

    const passVal = () => {
        navigation.navigate('PasswordVal')
    };

    return (
        <View style={style.container}>

            <View style={style.centerArea}>
                <View style={{ marginBottom: 100 }}>
                    <Text style={style.title}>What's your email?</Text>
                    <TextInput style={style.field} placeholder="Enail Address"></TextInput>
                </View>
                <View >
                    <View style={{ textAlign: 'center' }} >
                        <Text style={{ width: '100%', textAlign: "right" }}>1 of 3</Text>

                        <Progress.Bar progress={0.3} width={300} color ={"#41C485"}/>
                    </View>

                    <TouchableOpacity onPress={passVal} style={style.button}>
                        <Text style={{color: 'white'}}>Next</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>
    )

}


const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    button: {
        backgroundColor: "#41C485",
        color: 'white',
        borderRadius: 16,
        width: 300,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    field: {
        fontSize: 14,
        color: 'gray'
    },
    centerArea: {
        height: '100%',
        justifyContent: 'center',
    }
});