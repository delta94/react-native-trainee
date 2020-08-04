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

const styles = StyleSheet.create({
    productImage: {
        width: 100,
        height: 100
    },
    productImageBox: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10
    },
    fieldValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#858385'
    },
    fieldLabel: {
        fontSize: 12,
        color: 'gray'
    },
    detailsView: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    divider: {
        backgroundColor: 'gray',
        height: 1,
        marginTop: 10
    },
    imageDivider: {
        backgroundColor: 'gray',
        height: 1,
        marginTop: 10
    },
    imageView: {
        flexDirection: 'row',
        marginTop: 40
    },
    imageUrl : {
        marginLeft : 10,
        flex : 1
    }
});


const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductDetails);

