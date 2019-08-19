import React from 'react';
import {View, Text, Image} from 'react-native';



const Complete = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.setStyle}>Complete, Nice Job!</Text>
            <View style={{flex:1}}>
                <Image
                    source={require('./squirt.png')}
                    />
            </View>
        </View>
    )
}

const styles ={
    headerContainer: {
        backgroundColor: '#DCEEFA',
        // justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    setStyle: {
        fontFamily:  'Cochin',
        fontSize: 70,
        fontWeight: 'bold',
        alignItems: 'center',
        flex: .25,
        paddingTop:20
        // color: '#464950'
    },
    countStyle : {
        fontSize: 70,
        fontWeight: 'bold',
    }
}

export default Complete;