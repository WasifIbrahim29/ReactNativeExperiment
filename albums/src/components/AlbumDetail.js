import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => (

    <Card>           
        <Text>{props.item.title}</Text>
    </Card>
);

export default AlbumDetail;
