import { useIsDrawerOpen } from '@react-navigation/drawer';
import React from 'react'
import { Header } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';

import {
    Button, View, StyleSheet
} from 'react-native';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from 'react-native-vector-icons/Entypo';

class MainLayout extends React.Component {
    constructor(props) {
        super(props)

    }
    getLeftHeaderConponent = () => {
        if (this.props.navigation) {
            return (
                <>
                    <IoniconsIcon
                        name="menu"
                        color="white"
                        size={25}
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    />

                </>
            );
        }
        return undefined;

    }

    getRightHeaderComponent = () => {
        let { showShoppingBasket, showThreeDotsMenu } = this.props;
        if (this.props.navigation) {
            return (
                <>
                    <View style={styles.rightHeaderComponent}>
                        {showThreeDotsMenu
                            ? <EntypoIcon
                                name='dots-three-vertical'
                                color="white"
                                size={25}
                                onPress={() => null}
                            /> : null}

                        {showShoppingBasket
                            ? <SimpleLineIcon
                                style={styles.shoppingBasket}
                                name="basket"
                                color="white"
                                size={25}
                                onPress={() => null}
                            />
                            : null}
                    </View>

                </>
            );
        }
        return undefined;
    }

    render() {
        return (
            <>
                <Header
                    containerStyle={styles.layoutHeader}
                    leftComponent={this.getLeftHeaderConponent}
                    centerComponent={{ text: this.props.screenTitle, style: styles.centerHeaderComponent }}
                    rightComponent={this.getRightHeaderComponent}
                />

            </>
        );
    }
}

const styles = StyleSheet.create({

    layoutHeader: {
        backgroundColor: '#ac37b6'
    },
    centerHeaderComponent: {
        color: 'white'
    },
    rightHeaderComponent: {
        flexDirection: 'row'
    },
    shoppingBasket: {
        marginLeft: 20
    }
});

export default MainLayout;