import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { MovieType } from '../../../redux/reducers/moviesReducer';
import { styles } from '../styles';
const link = 'https://www.themoviedb.org/t/p/w440_and_h660_face';
interface Props {
    item: MovieType,
    index: number
}
export const _formatDate = (date: string) => {
    if (date == undefined || date == null || date === '' || date.replace(/\s/g, '') === "")
        return '';
    return new Date(date).getFullYear();
}
const ItemMovie = (props: Props) => {
    const { item, index } = props;
    return (
        <View key={`ItemMovie${index}`} style={styles.item}>
            <FastImage source={{ uri: link + item.poster_path }} style={styles.image} resizeMode='stretch' />
            <View style={styles.vote}>
                <Text style={styles.txtVote}>{item.vote_average}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.year}>{_formatDate(item.release_date)}</Text>
                <Text style={styles.txtName}>{item.title}</Text>
            </View>
        </View>
    );
}
export default ItemMovie;
