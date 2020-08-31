import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';


export const Splash = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/CatScanBigLogo.png')} />
        </View>
    );
}

export default Splash;

