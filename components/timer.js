import React from 'react';
import CountDown from 'react-native-countdown-component';
import {View} from 'react-native';



const Timer = ({set, timerOn, nextRep, curCount, timer, nextLapTimer, timerCount }) => {

    return (
        <View style={styles.timerContainer}>
        <CountDown
            until={timer+1}
            onFinish={() => {
                nextRep(1)
                let actInterval= set.interval
                if(set.count >= curCount) {
                    nextLapTimer()
                }
            }}
            timeToShow={['M', 'S']}
            timeLabels={{}}
            size={175}
            running={timerOn}
        />
        </View>
    )
}

const styles ={
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    welcomeTitle: {
        fontFamily:  'Cochin',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#4592C6'
    }
}


export default Timer;