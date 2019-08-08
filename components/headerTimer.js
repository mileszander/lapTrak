import React from 'react';
import {View, Text} from 'react-native';



const Header = ({set, curCount}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={{flex:3, alignItems: 'center'}}>
                <Text style={styles.countStyle}>
                   {curCount} / {set.count}
                </Text>
            </View>
            <View style={{flex:6, alignItems: 'center'}}>
                <Text style={styles.setStyle}>
                    {set.count} x {set.distance} {set.stroke} {set.type} on the {set.interval}
                </Text>
            </View>
        </View>
    )
}

const styles ={
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    setStyle: {
        fontFamily:  'Cochin',
        fontSize: 70,
        fontWeight: 'bold',
        // color: '#464950'
    },
    countStyle : {
        fontSize: 70,
        fontWeight: 'bold',
    }
}

export default Header;