import React from 'react';
import {View, Text} from 'react-native';

//components
import Buttons from './buttonRow'
import Header from './headerTimer'



const Timer = ({workOuts}) => {
    return (
        <View style={styles.timerContainer}>
            <View style={{flex:.75, alignItems: 'center', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Header />
            </View>
            <View style={{flex:1.5, alignItems: 'center', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Text>TIMER LEVEL ROW</Text>
            </View>
            <View style={{flex:.5, alignItems: 'center', borderWidth: 0.5, borderColor: '#d6d7da'}}>
                <Buttons />
            </View>


        </View>
    )
}

const styles ={
    timerContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#DCEEFA',
        flex: 1,
        alignContent: 'center'
        
    },
}

export default Timer;