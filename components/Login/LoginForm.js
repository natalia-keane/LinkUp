import React, {Component} from 'react';
import { useState } from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Button} from 'react-native';

/* 
MAY NEED FOR IOS
import StatusBar
<StatusBar barStyle='light-content'/>
import KeyboardAvoidingView
change first view component to kav behaviour='padding'
spacing, fontFamily, size of login button
   spacing: {
        paddingTop: 40,
    }
how to get cursor at end of or the beginning of text
(cursor is at beginning on tablet but in the middle on phone)
*/

class LoginForm extends React.Component {
    
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder='Username or E-mail address'
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType='next'
                keyboardType='email-address'
                autoCapitalize='none'
                style={styles.input}
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCorrect={false}
                />
                
                <TextInput 
                placeholder='Password'
                placeholderTextColor='rgba(255,255,255,0.7)'
                secureTextEntry
                returnKeyType='go'
                style={styles.input}
                ref={(input) => this.passwordInput = input}/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
    },

    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        width: 200,
        paddingHorizontal: 10,
        borderRadius: 10, 
        textAlign: 'center'
    },

    buttonContainer:{
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        paddingVertical: 15,
        width: 200
    },

    buttonText:{
        width: 200,
        textAlign: 'center',
        fontWeight: '700'
    }

});

export default LoginForm;