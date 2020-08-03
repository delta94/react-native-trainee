
import React from 'react'
import MainLayout from '../../components/Layout/MainLayout';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';

class ProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    renderProductsList = () => {
        let products = []; //from redux
        if (!products) {
            return (<Text>Products is empty.</Text>);
        }

        return (
            <View>
                {products.map((product) => {
                    return <View> {product}</View> //product item component
                })}
            </View>);
    }

    render() {

        let productsList = this.renderProductsList();

        return (
            <>
                <MainLayout
                    navigation={this.props.navigation}
                    screenTitle='My Shop'
                    showShoppingBasket={true}
                    showThreeDotsMenu={true}
                />

                {productsList}


            </>
        );
    }
}

const styles = StyleSheet.create({
    name: {

    }
});

export default ProductFeed;