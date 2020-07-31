
import React from 'react'
import { Text, StyleSheet, Button } from 'react-native';



class ProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
               
                <Text style={styles.content}>Hello, I am ProductFeed! </Text>

                <Button
                    title="Go to ManagerProductFeed"
                    onPress={() => this.props.navigation.navigate('ManagerProductFeed', {
                        itemId: 90
                    })}
                >
                </Button>
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

export default ProductFeed;