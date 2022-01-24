import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { IC_BACK } from '../../../assets';
import { styles } from '../styles';
const Header = () => {
    return (
        <View style={styles.rowAlign}>
            <Pressable>
                <Image
                    source={IC_BACK}
                    style={styles.icBack}
                />
            </Pressable>
            <Text style={styles.txtBack}>{'Back'}</Text>
        </View>
    );
}
export default Header;
