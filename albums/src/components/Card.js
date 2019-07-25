import React from 'react';
import CardSection from './CardSection';

const Card = (props) => (
        <CardSection style={styles.containerStyle}>
            {props.children}

        </CardSection>
    );

const styles = {
    containerStyle: {
        borderWidth: 1,
        broderRadius: 2,
        borderColor: '#ddd',
        broderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
