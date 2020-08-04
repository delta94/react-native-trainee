
import React from 'react'
import { Text, StyleSheet, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import MainLayout from '../../components/Layout/MainLayout';

class ManagerProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <>
                <MainLayout navigation={this.props.navigation} screenTitle='Your Products'/>

                <Text style={styles.content}>ManagerProductFeed</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ManagerProductFeed;