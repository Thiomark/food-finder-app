import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Dimensions, ImageBackground, Pressable } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Images/pexels-ksenia-chernaya-3965517.jpg')} style={styles.imageStyle}>
                <Pressable style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Get started</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: "100%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonWrapper: {
        zIndex: 2,
        width: '80%',
        backgroundColor: '#171A20CC',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 25,
        position: 'absolute',
        bottom: 30
    }
});


export default Home