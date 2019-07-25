import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ item }) => {
    const { title, artist, thumbnail_image } = item;
    return (           
        <Card>   
            <View>
                <Image source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>        
        </Card>

    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }

};

export default AlbumDetail;
