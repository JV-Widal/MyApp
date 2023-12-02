import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


import * as Progress from 'react-native-progress';



export default function Verify() {



    return (
        <View style={style.container}>
            <View>
                <Text>Sign up</Text>
            </View>

            <View style={style.centerArea}>
                <Text> Verify OTP</Text>
                <Text>Please enter the code we sent you to email</Text>

                {/* validao */}

                <Text> Didn't Receive OTP ?</Text>
                <Text> Resend Code</Text>

                <Progress.Bar progress={1} width={200} />


                <TouchableOpacity style={style.button}>
                    <Text> Verify</Text>
                </TouchableOpacity>
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