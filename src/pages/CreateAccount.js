import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



const CreateAccount = ({ navigation }) => {

    return (

        <View style={style.container}>
            <View style={style.topBar}>
                <Text>Create Account</Text>
                <Text>Fill your information below or register with your social account</Text>

            </View>
            <View style={style.centerArea}>
                <TextInput style={style.field} placeholder="Your Name"></TextInput>
                <TextInput style={style.field} placeholder="MM/DD/YYYY"></TextInput>
                <TextInput style={style.field} placeholder="Enter Your Location"></TextInput>
                <TextInput style={style.field} placeholder="+1"></TextInput>

                <TouchableOpacity style={style.button}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={style.footer}>
                <TouchableOpacity>
                    <Text style={{ color: "#C4C4C4" }}>-- Or sign in with --</Text>
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
    field: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
        color: "#C4C4C4"
    },
});

export default CreateAccount;