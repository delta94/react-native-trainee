
import React from 'react'
import { Header as HeaderElement } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';
import { Button, View } from 'react-native';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { StyleSheet } from 'react-native';

interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}
class Header extends React.Component<any & any & any, OwnStateProps> {
    constructor(props : any) {
        super(props)

    }

    getLeftHeaderConponent = () => {
        let { isGoBackActive } = this.props;
        if (this.props.navigation) {
            return (
                <>
                    {!isGoBackActive
                        ? <IoniconsIcon.Button
                            name="menu"
                            color="white"
                            backgroundColor='#ac37b6'
                            size={25}
                            //onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        />
                        : <FeatherIcon.Button
                            name="arrow-left"
                            color="white"
                            backgroundColor='#ac37b6'
                            size={25}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    }
                </>
            );
        }
        return <></>;
    }

    getRightHeaderComponent = () => {
        let { showShoppingBasket, showThreeDotsMenu } = this.props;
        if (this.props.navigation) {
            return (
                <>
                    <View style={styles.rightHeaderComponent}>
                        {showThreeDotsMenu
                            ? <EntypoIcon.Button
                                name='dots-three-vertical'
                                color="white"
                                size={25}
                                backgroundColor='#ac37b6'
                                onPress={() => null}
                            /> : null}

                        {showShoppingBasket
                            ? <SimpleLineIcon.Button
                                name="basket"
                                color="white"
                                size={25}
                                backgroundColor='#ac37b6'
                                onPress={() => null}
                            />
                            : null}
                    </View>

                </>
            );
        }
        return <></>;
    }

    render() {
        return (
            <>
                {/* <HeaderElement
                    containerStyle={styles.layoutHeader}
                    leftComponent={this.getLeftHeaderConponent}
                    centerComponent={{ text: this.props.screenTitle, style: styles.centerHeaderComponent }}
                    rightComponent={this.getRightHeaderComponent}
                /> */}
            </>
        );
    }
}



export const styles = StyleSheet.create({

    layoutHeader: {
        backgroundColor: '#ac37b6'
    },
    centerHeaderComponent: {
        color: 'white',
        fontSize : 18
    },
    rightHeaderComponent: {
        flexDirection: 'row'
    }
});
export default Header;