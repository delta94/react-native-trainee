import React, { Component } from 'react';
import { View, StyleSheet, Image, AppState } from 'react-native';



export const Splash = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/CatScanBigLogo.png')} />
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },
    image: {
        height: 500,
        width: 500,
    },
});
