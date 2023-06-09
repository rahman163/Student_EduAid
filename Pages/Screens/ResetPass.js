import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
//import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function ResetPass() {
    const [email, setEmail] = useState("null");
    //const [password, setPassword] = useState("null");

    //   const login = () => {
    //     signInWithEmailAndPassword(auth, email)
    //       .then((userCredential) => {
    //         alert("User login Suessfully");
    //         navigation.navigate("Tabs");
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //       });
    //   }
    const resetPassword = () => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email has been sent successfully");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            alert("please enter a valid email");
        }
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3256/3256783.png',
                }}
            />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View> */}

            <TouchableOpacity style={styles.forgot_button}
                onPress={() => resetPassword()}>
                <Text style={styles.Submit_Btn}>Submit</Text>
                
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.loginBtn}
        onPress={() => login()}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8aedf9",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 60,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 15,
        width: "75%",
        height: 55,
        marginBottom: 20,
        marginTop: 1,
        alignItems: "center",
        justifyContent: "center",
      },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    forgot_button: {
        width: "35%",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#FFD700",
    },
});
