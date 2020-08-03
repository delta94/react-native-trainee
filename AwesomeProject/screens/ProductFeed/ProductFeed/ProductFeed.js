
import React from 'react'
import MainLayout from '../../../components/Layout/MainLayout';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem'

class ProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    renderProductsList = () => {
        let { products } = this.props;
        if (!products) {
            return (<Text>Products is empty.</Text>);
        }

        return (
            <View>
                {products.map((product) => {
                    return <ProductItem product={product}/> 
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

const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductFeed);