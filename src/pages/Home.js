import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Verify from "./Verify";
import EmailVal from "./EmailVal";
import CreateAccount from "./CreateAccount";
import social from "../../assets/social.svg";

const Home = ({ navigation }) => {


    const Verify = () => {
        navigation.navigate('Verify')
    };

    const emailVal = () => { 
        navigation.navigate('EmailVal')
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorText, setErrorText] = useState("");
    const [loginText, setLoginText] = useState("");

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(validateEmail(text));
        setErrorText(isValidEmail ? '' : 'Invalid email format');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsValidPassword(validatePassword(text));
        setLoginText("");
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const minPasswordLength = 6;
        const minLetterCount = 2;

        const letterRegex = /[a-zA-Z]/g;
        const letterMatches = password.match(letterRegex);

        return password.length >= minPasswordLength && letterMatches && letterMatches.length >= minLetterCount;
    };

    const handleLogin = () => {
        if (isValidEmail && isValidPassword) {
            console.log("Login successful");
            setLoginText("You can now log in!");
        } else {
            console.log("Invalid email or password");
            setLoginText("");
        }
    };


    return (

        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View style={{ height: 200 }}>
                    <Text style={styles.title}>Log In</Text>
                    <Text style={{ color: 'gray' }}>Hi! Welcome</Text>
                </View>

                <View style={{ width: '100%', paddingLeft: 40, paddingRight: 40 }}>
                    <Text style={{ textAlign: 'left', fontSize: 10 }}>Email Address</Text>
                    <TextInput
                        style={styles.field}
                        placeholder="Enter your email"
                        onChangeText={handleEmailChange}
                        value={email}
                    ></TextInput>

                    {loginText !== "" && <Text style={{ color: "green" }}>{loginText}</Text>}
                    {errorText !== "" && <Text style={{ color: "red" }}>{errorText}</Text>}

                    <Text style={{ textAlign: 'left', fontSize: 10 }}>Password</Text>
                    <TextInput style={styles.field} placeholder="Enter your passowrd"></TextInput>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={Verify} >
                        <Text>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ textAlign: 'center' }}>
                    <TouchableOpacity onPress={emailVal}>
                        <Text>Forgotten your passowrd ?</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "#C4C4C4", marginBottom: 50, textAlign: 'center' }}>-- Or sign in with --</Text>
                </View>

                <Image source={require('../../assets/social.svg')} style={{ width: 260, height: 80 }} />

                <Text style={{ color: 'gray', marginTop: 20 }}> Don't have an account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={{ color: "#41C485" }}>CreateAccount</Text>
                </TouchableOpacity>



            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    innercontainer: {
        width: 390,
        height: 840,
        alignItems: 'center',
        justifyContent: 'center',
    },
    field: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
        color: "#C4C4C4"
    },
    title: {
        color: "#14304",
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
    }


});

export default Home;