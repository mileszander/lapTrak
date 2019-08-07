import React from 'react';
import {View, Text} from 'react-native';


const Header = ({workOuts}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={{flex:3, alignItems: 'center', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Text>Set Counter</Text>
            </View>
            <View style={{flex:6, alignItems: 'center', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Text>Set Counter</Text>
            </View>
        </View>
    )
}

const styles ={
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
}

export default Header;