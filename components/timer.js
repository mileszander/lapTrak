import React, { Component } from 'react';

import CountDown from 'react-native-countdown-component';
import {View, Text} from 'react-native';


// class Timer extends Comment = ({set,timerOn, nextRep,resetTimer})  {
class Timer extends Component {
    constructor(props) {
        super()
        this.state = {
            timer: 5,
            resetTime: 0
        }
    }

    render () {
    return (
        <View style={styles.timerContainer}>
        <CountDown
            until={this.state.timer}
            onFinish={() => {
                this.props.nextRep(1)
                let actInterval= this.props.set.interval
                if(this.props.set.count >= this.props.curCount) {
                   this.setState({
                    timer:0,
                    resetTime: actInterval
                   })
                   this.setState({
                    timer: this.state.resetTime
                })
                }
            }}
            timeToShow={['M', 'S']}
            timeLabels={{}}
            size={175}
            running={this.props.timerOn}
        />


        </View>
    )
}
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