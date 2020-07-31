
import React from 'react'
import { Text, StyleSheet, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';


class ManagerProductFeed extends React.Component {

    constructor(props) {
        super(props) 
    }
    render() {
        
        return (
            <>
                <Text style={styles.content}>Hello, I am ManagerProductFeed! id is</Text>
                    
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
                <Button title="open nav" onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
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