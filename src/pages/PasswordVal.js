import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Progress from 'react-native-progress';

import Verify from "./Verify";


export default function PasswordVal() {

    const navigation = useNavigation();


    const Verify = () => {
        navigation.navigate('Verify')
    };

    return (
        <View style={style.container}>

            <View style={style.centerArea}>
                <View style={{ marginBottom: 100 }}>
                    <Text style={style.title}>Create Password</Text>
                    <TextInput style={style.field} placeholder="Password"></TextInput>
                </View>

                <TouchableOpacity style={{ display: 'flex', flexDirection: "row" }}>
                    <View style={style.bolinha}></View>
                    <Text style={{ paddingLeft: 6 }}>Show Password</Text>
                </TouchableOpacity>

                <View>
                    <View style={{ textAlign: 'center' }}>
                        <Text style={{ width: '100%', textAlign: "right" }}>1 of 3</Text>
                        <Progress.Bar progress={0.6} width={300} color ={"#41C485"}/>
                    </View>

                    <TouchableOpacity onPress={Verify} style={style.button}>
                        <Text style={{color: 'white'}}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={{ width: 300 }}>
                        <Text style={{ textAlign: 'center' }}>By signing up, you agree to our
                         <b>Terms of Service</b> and <b>Privacy Policy</b></Text>
                    </View>
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
        height: '100%',

    }, button: {
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
    bolinha: {
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderBlockColor: 'gray'
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
        justifyContent: 'center'
    }

});