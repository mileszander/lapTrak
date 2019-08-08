import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

//import components
import Welcome from './components/welcome'
import InputScreen from './components/inputScreen'
import TimerPage from './components/timerPage'
import Next from './components/nextSet'
import Complete from './components/complete'


export default class App extends Component {
  constructor() {
    super () 
    this.state = {
        page: 0,
        timeOn: false,
        count:0,
        currentSet: 0,
        timer: 9,
        resetTime: 0,
        //array of object for workouts [ {stroke: free, distance: 100, amount: 10}]
        workOuts: [
        //   {
        //   "count": 5,
        //   "distance": 100,
        //   "interval": 2,
        //   "stroke": "Free",
        //   "type": "swim",
        // },
        // {
        //   "count": 3,
        //   "distance": 100,
        //   "interval": 3,
        //   "stroke": "Back",
        //   "type": "swim",
        // },
      ],
        // this one is maybe, I'm thinking we will need this one just because if we map through the list 
        //we will have a lot of extra stuff going on, including a timeout. 
    }
    this.nextPage=this.nextPage.bind(this)
    this.lastPage=this.lastPage.bind(this)
    this.submitSet=this.submitSet.bind(this)
    this.changeTimer=this.changeTimer.bind(this)
    this.nextRep=this.nextRep.bind(this)
    this.nextLapTimer=this.nextLapTimer.bind(this)
    this.timerCount=this.timerCount.bind(this)


  }
  
  //iterate through pages, will have button press
  nextPage(){
    let curPage = this.state.page 
    this.setState({page: (curPage += 1)})
  }

  //go back to timer page for next set
  lastPage(){
    let curPage = this.state.page 
    let currentRep = this.state.count
    let nextSet = this.state.currentSet
    if(this.state.currentSet === this.state.workOuts.length){
      this.setState({
        page: 4
      })
    } else {
    this.setState({
        page: (curPage -= 1),
        count: 0,
        timer: 9
      })
    }
  }

  //add sets
  submitSet(event) {
    sets = this.state.workOuts
    sets.push(event)
    this.setState({workOuts : sets})
  } 

  //button that starts clock
  changeTimer(event) {
    this.setState({timeOn: event})
  }


//iteration counter for timerHeader
  nextRep (next) {
    let currentRep = this.state.count
    currentRep++
    if(currentRep <= this.state.workOuts[this.state.currentSet].count) {
      this.setState({
        count: currentRep
      }) 
    } else if (this.state.currentSet !== this.state.workOuts.length-1){
      let nextSet = this.state.currentSet
      nextSet++
      this.setState({
        page: 3,
        currentSet: nextSet++
    }) 
      console.log(this.state.set) 
    } else {
      this.setState({page:4})
    }
  }

  nextLapTimer(){
    let actInterval= this.state.workOuts[this.state.currentSet].interval
    this.setState({
      timer: 0,
      resetTime: actInterval
    })
    this.setState({
      timer: this.state.resetTime
    })
    this.timerCount()
  }

  timerCount() {
    return (<CountDown
    until={this.state.timer}
    onFinish={() => {
        this.nextRep(1)
        let actInterval= this.state.workOuts[this.state.currentSet].interval
        if(this.state.workOuts[this.state.currentSet].count >= this.state.curCount) {
            this.nextLapTimer()
        }
    }}
    timeToShow={['M', 'S']}
    timeLabels={{}}
    size={175}
    running={this.state.timerOn}
  />)

  }


    render() {
      //welcome page
      if(this.state.page ===0) {
        return (
          <Welcome nextPage={this.nextPage}/>
      )} else if (this.state.page ===1) {
        //Input page
        return (
        <InputScreen nextPage={this.nextPage} submitSet={this.submitSet}
        workOuts={this.state.workOuts} />
      )} else if (this.state.page === 2) {
      //swim page          
        return (
          <TimerPage workOuts={this.state.workOuts} count={this.state.count}
          setCount={this.state.currentSet} changeTimer={this.changeTimer}
          timerOn={this.state.timeOn} nextRep={this.nextRep} timer={this.state.timer} 
          resetTime={this.state.resetTime} nextLapTimer={this.nextLapTimer} 
          timerCount={this.timerCount}
          />
          // resetTimer={this.resetTimer}
      )} else if (this.state.page === 3) {
      //next workout page
        return (
          <Next lastPage={this.lastPage}
          set={this.state.workOuts[this.state.currentSet]}/>
      )} 
      else if (this.state.page === 4) {
        // Completion page
        return (
          <Complete />
      )} 
        
  }
}
