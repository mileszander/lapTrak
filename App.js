import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import components
import Welcome from './components/welcome'
import InputScreen from './components/inputScreen'

export default class App extends Component {
  constructor() {
    super () 
    this.state = {
        page: 1,
        //array of object for workouts [ {stroke: free, distance: 100, amount: 10}]
        workOuts: [],
        // this one is maybe, I'm thinking we will need this one just because if we map through the list 
        //we will have a lot of extra stuff going on, including a timeout. 
        currentSet: 0
    }
    this.nextPage=this.nextPage.bind(this)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //iterate through pages, will have button press
  nextPage(){
    let curPage = this.state.page 
    this.setState({page: (curPage += 1)})
    console.log('clicked next page!')
  }

  

  //functions for accepting users

    render() {
      //welcome page
      if(this.state.page ===0) {
        return (
          <Welcome nextPage={this.nextPage}/>
      )} else if (this.state.page ===1) {
        //Input page
        return (
        <InputScreen />
      )} else if (this.state.page === 2) {
      //swim page          
        return (
          <Text>Timer Page</Text>
      )} else if (this.state.page === 3) {
      //next workout page
        return (
          <Text>Timer Page</Text>
      )} 
      else if (this.state.page === 4) {
        // Completion page
        return (
          <Text>Completion Page</Text>
      )} 
        
  }
}
