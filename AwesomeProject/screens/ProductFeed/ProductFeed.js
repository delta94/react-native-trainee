
import React from 'react'
import { Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';


class ProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <MainLayout
                    navigation={this.props.navigation}
                    screenTitle='My Shop'
                    showShoppingBasket={true}
                    showThreeDotsMenu={true}
                />

                <Text style={styles.content}>Hello, I am ProductFeed! </Text>
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