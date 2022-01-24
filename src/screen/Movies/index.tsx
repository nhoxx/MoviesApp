import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovie } from '../../redux/actions';
import { moviesReducerSelector } from '../../redux/reducers/moviesReducer';
import { styles } from './styles';

import Header from './widget/Header';
import ItemMovie from './widget/ItemMovie';
const MoviesScreen = () => {
    const pageIndex = useRef(1);
    const [loading, setLoading] = useState(true);
    const [isRefresh, setRefresh] = useState(false);
    const dispatch = useDispatch();
    const movies = useSelector(moviesReducerSelector);

    const _getData = () => {
        dispatch(getListMovie({
            page: pageIndex.current,
            callBack: () => setLoading(false),
        }));
    };

    useEffect(_getData, []);

    const _onRefresh = () => {
        setRefresh(true);
        pageIndex.current = 1;
        const payload = {
            page: pageIndex.current,
            callBack: () => setRefresh(false)
        }
        dispatch(getListMovie(payload));
    };

    const _loadMore = () => {
        if ((pageIndex.current < movies?.totalPage) && !loading) {
            setLoading(true);
            pageIndex.current++;
            const payload = {
                page: pageIndex.current,
                callBack: () => setLoading(false)
            }
            dispatch(getListMovie(payload));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, styles.horizontal]}>
                <Header />
                <Text style={styles.txtTitle}>{'Popular list'}</Text>
                <FlatList
                    data={movies?.data ?? []}
                    renderItem={({ item, index }) => <ItemMovie item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapperStyle}
                    refreshing={isRefresh}
                    onRefresh={_onRefresh}
                    onEndReached={_loadMore}
                    onEndReachedThreshold={0.7}
                    ListFooterComponent={() => {
                        if (loading)
                            return <ActivityIndicator size={'small'} color={'red'} />
                        else if (movies?.data && movies.data?.length == 0)
                            return <Text style={styles.txtNoData}>{'Không tìm thấy dữ liệu'}</Text>
                        return null;
                    }
                    }
                />
            </View>
        </SafeAreaView>

    );
}

export default MoviesScreen;
