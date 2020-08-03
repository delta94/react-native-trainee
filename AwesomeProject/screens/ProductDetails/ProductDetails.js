import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        return (<>
        <Text>{Title}</Text>
        <Text>{Price}</Text>
        <Text>{Description}</Text>
        <Text>{ImageUrl}</Text>
        <Image
          source={{uri: ImageUrl}}
        />
        </>);
    }
}

export default ProductDetails;