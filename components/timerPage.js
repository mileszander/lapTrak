import React from 'react';
import {View, Text} from 'react-native';

//components
import Buttons from './buttonRow'
import Header from './headerTimer'
import Timer from './timer'


const TimerPage = ({workOuts, setCount, count, changeTimer, timerOn, nextRep, timer, resetTimer, nextLapTimer, timerCount}) => {
    return (
        <View style={styles.timerPageContainer}>
            <View style={{flex:.6, alignItems: 'center'}}>
                <Header set={workOuts[setCount]} curCount={count}/>
            </View>
            <View style={{flex:1.5, alignItems: 'center'}}>
                <Timer set={workOuts[setCount]} timerOn={timerOn} 
                nextRep={nextRep} curCount={count} timer={timer} resetTimer={resetTimer}
                nextLapTimer={nextLapTimer} timerCount={timerCount}/> 
                {/* resetTimer={resetTimer} */}
            </View>
            <View style={{flex:.25, alignItems: 'center'}}>
                <Buttons changeTimer={changeTimer}/>
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