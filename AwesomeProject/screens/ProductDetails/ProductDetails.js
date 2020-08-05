import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import {styles } from './styles'
class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    getProductById = (id) => {
        return this.props.products.find(product => product.Id === id);
    }

    render() {
        const { itemId } = this.props.route.params;

        let { Title, Price, Description, ImageUrl } = this.getProductById(itemId);
        let image = { uri: `${ImageUrl}` };

        return (
            <>
                <MainLayout navigation={this.props.navigation} screenTitle='Product Details' isGoBackActive={true} />
                <View style={styles.detailsView}>

                    <Text style={styles.fieldLabel}>Title</Text>
                    <Text style={styles.fieldValue}>{Title}</Text>

                    <Divider style={styles.divider} />

                    <Text style={styles.fieldLabel}>Price</Text>
                    <Text style={styles.fieldValue}>{Price}</Text>

                    <Divider style={styles.divider} />

                    <Text style={styles.fieldLabel}>Description</Text>
                    <Text style={styles.fieldValue}>{Description}</Text>

                    <Divider style={styles.divider} />

                    <View style={styles.imageView}>
                        <View style={styles.productImageBox}>
                            <Image source={image} style={styles.productImage} />
                        </View>

                        <View style={styles.imageUrl}>
                            <Text style={styles.fieldLabel}>Image Url</Text>
                            <Text style={styles.fieldValue}>{ImageUrl}</Text>
                            <Divider style={styles.imageDivider} />
                        </View>
                    </View>

                </View>
            </>);
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductDetails);

