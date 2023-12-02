import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


import * as Progress from 'react-native-progress';



export default function Verify() {


    const [numericValue, setNumericValue] = useState('');


    return (
        <View style={style.container}>


            <View style={style.centerArea}>
                <View style={{ marginBottom: 100 }}>
                    <Text style={style.title}> Verify OTP</Text>
                    <Text style={{ color: 'gray', textAlign: 'center' }}>Please enter the code we sent you to email</Text>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <TextInput
                        style={style.cube}
                        placeholder=""
                        keyboardType="numeric"
                        value={numericValue}
                        onChangeText={(text) => setNumericValue(text)}
                    />
                    <TextInput
                        style={style.cube}
                        placeholder=""
                        keyboardType="numeric"
                        value={numericValue}
                        onChangeText={(text) => setNumericValue(text)}
                    />
                    <TextInput
                        style={style.cube}
                        placeholder=""
                        keyboardType="numeric"
                        value={numericValue}
                        onChangeText={(text) => setNumericValue(text)}
                    />
                    <TextInput
                        style={style.cube}
                        placeholder=""
                        keyboardType="numeric"
                        value={numericValue}
                        onChangeText={(text) => setNumericValue(text)}
                    />
                </View>

                <View style={{ marginBottom: 20}}>
                    <Text style={{ color: 'gray', textAlign: 'center' }}> Didn't Receive OTP ?</Text>
                    <Text style={{ color: "#41C485", textAlign: 'center' }}> Resend Code</Text>
                </View>

                <View style={{ textAlign: 'center' }} >
                    <Text style={{ width: '100%', textAlign: "right" }}>3 of 3</Text>

                    <Progress.Bar progress={1} width={300} color={"#41C485"} />
                </View>

                <TouchableOpacity style={style.button}>
                    <Text style={{ color: 'white' }}> Verify</Text>
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
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'center'
    },
    field: {
        fontSize: 14,
        color: 'gray'
    },
    centerArea: {
        height: '100%',
        justifyContent: 'center',
    },
    cube: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray'
    }
});