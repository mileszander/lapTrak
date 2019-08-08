import React from 'react';
import {View, Text} from 'react-native';

//components
import Buttons from './buttonRow'
import Header from './headerTimer'
import Timer from './timer'


const TimerPage = ({workOuts, setNum}) => {
    return (
        <View style={styles.timerPageContainer}>
            <View style={{flex:.6, alignItems: 'center'}}>
                <Header set={workOuts[setNum]}/>
            </View>
            <View style={{flex:1.5, alignItems: 'center'}}>
                <Timer set={workOuts[setNum]}/> 
            </View>
            <View style={{flex:.25, alignItems: 'center'}}>
                <Buttons />
            </View>


        </View>
    )
}

const styles ={
    timerPageContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#DCEEFA',
        flex: 1,
        alignContent: 'center'
    }
}

export default TimerPage;