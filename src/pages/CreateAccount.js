import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";



const CreateAccount = ({ navigation }) => {

    const Home = () => {
        navigation.navigate('Home')
    };

    return (

        <View style={style.container}>
            <View style={style.topBar}>
                <Text style={style.title}>Create Account</Text>
                <Text style={{ color: 'gray', textAlign: 'center', }}>Fill your information below or register with your social account</Text>

            </View>
            <View style={style.centerArea}>
                <View>
                    <Text style={style.borderText}>Name</Text>
                    <TextInput style={style.field} placeholder="Your Name"></TextInput>
                </View>
                <View>
                    <Text style={style.borderText}>Birthday</Text>
                    <TextInput style={style.field} placeholder="MM/DD/YYYY"></TextInput>
                </View>

                <View>
                    <Text style={style.borderText}>Adress</Text>
                    <TextInput style={style.field} placeholder="Enter Your Location"></TextInput>
                </View>


                <View>
                    <Text style={style.borderText}>Prhone Number</Text>
                    <TextInput style={style.field} placeholder="+1"></TextInput>
                </View>


                <TouchableOpacity style={style.button} onPress={Home}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={style.footer}>
                <TouchableOpacity>
                    <Text style={{ color: "#C4C4C4", textAlign: 'center', padding: 10 }}>-- Or sign in with --</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/social.svg')} style={{ width: 260, height: 80 }} />
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
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        paddingLeft: 10,
        color: "#C4C4C4",
        height: 50,
        borderRadius: 30
    },
    borderText: {
        position: "absolute",
        top: -8,
        left: 10,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 5,
        color: 'black',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    topBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }, 
    footer: { 
        alignContent: 'center', 
        textAlign: 'center'
    } 
});

export default CreateAccount;