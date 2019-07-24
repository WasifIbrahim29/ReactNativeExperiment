import React from 'react';
import { View } from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}

        </View>
    );

};

const styles = {
    containerStyle: {
        borderWidth: 1,
        broderRadius: 2,
        borderColor: '#ddd',
        broderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
    }
}

export default Card;