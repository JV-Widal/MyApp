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
            <View style={style.topBar}>
                <Text>Sign up</Text>

            </View>
            <View style={style.centerArea}>
                <Text>Create Password</Text>

                <TextInput style={style.field} placeholder="Password"></TextInput>
                {/* Show Password */}

                <Progress.Bar progress={0.6} width={200} />


                <TouchableOpacity onPress={Verify} style={style.button}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

                <Text>By signing up, you agree to our Terms of Service and Privacy Policy</Text>

            </View>



        </View>
    )

}



const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 375,
        height: 850,

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
    }

});