import React, { Component } from 'react';
import {View, Text, Picker} from 'react-native';
import { Button } from 'react-native-elements';

const set = {stroke:'Back' , count: 0, distance: 0, interval: 0, type: 0 }


export default class InputFields extends Component {
    constructor () {
        super ()
        this.state = {
            stroke:'Free',
            distance: 100,
            count: 10, 
            interval: '1:30', 
            type: 'swim'
        }
}
    render () {
    return (
        //parent Container
        <View style={styles.inputFieldContainer}>
            <View>
                {/* STROKE SELECTOR */}
                <Picker
                    selectedValue={this.state.stroke}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        this.setState({stroke: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label="Free" value="Free" />
                    <Picker.Item label="Fly" value="Fly" />
                    <Picker.Item label="Back" value="Back" />
                    <Picker.Item label="Breast" value="Breast" />
                </Picker>
            </View>
            <View>
                {/* Yardage SELECTOR */}
                <Picker
                    selectedValue={this.state.distance}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        this.setState({distance: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label='25' value={25} />
                    <Picker.Item label='50' value={50} />
                    <Picker.Item label='75' value={75}  />
                    <Picker.Item label='100' value={100} />
                    <Picker.Item label='125' value={125} />
                    <Picker.Item label='150' value={150} />
                    <Picker.Item label='175' value={175}  />
                    <Picker.Item label='200' value={200} />
                    <Picker.Item label='225' value={225} />
                    <Picker.Item label='250' value={250} />
                    <Picker.Item label='300' value={300} />
                    <Picker.Item label='350' value={350} />
                    <Picker.Item label='400' value={400} />
                    <Picker.Item label='450' value={450} />
                    <Picker.Item label='500' value={500} />
                    <Picker.Item label='600' value={600} />
                    <Picker.Item label='700' value={700} />
                    <Picker.Item label='800' value={800} />
                    <Picker.Item label='900' value={900} />
                    <Picker.Item label='1000' value={1000} />
                </Picker>
            </View>
            <View>
                {/* Count SELECTOR */}
                <Picker
                    selectedValue={this.state.count}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        this.setState({count: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="11" value={11} />
                    <Picker.Item label="12" value={12} />
                    <Picker.Item label="13" value={13} />
                    <Picker.Item label="14" value={14} />
                    <Picker.Item label="15" value={15} />
                    <Picker.Item label="16" value={16} />
                    <Picker.Item label="17" value={17} />
                    <Picker.Item label="18" value={18} />
                    <Picker.Item label="19" value={19} />
                    <Picker.Item label="20" value={20} />
                    <Picker.Item label="22" value={22} />
                    <Picker.Item label="24" value={24} />
                    <Picker.Item label="26" value={26} />
                    <Picker.Item label="28" value={28} />
                    <Picker.Item label="30" value={30} />
                    <Picker.Item label="35" value={35} />
                    <Picker.Item label="40" value={40} />
                    <Picker.Item label="45" value={45} />
                    <Picker.Item label="50" value={50} />
                </Picker>
            </View>
            <View>
                {/* INTERVAL SELECTOR */}
                <Picker
                    selectedValue={this.state.interval}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        this.setState({interval: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label="15" value={15} />
                    <Picker.Item label="20" value={20} />
                    <Picker.Item label="25" value={25} />
                    <Picker.Item label="30" value={30} />
                    <Picker.Item label="35" value={35} />
                    <Picker.Item label="40" value={40} />
                    <Picker.Item label="45" value={45} />
                    <Picker.Item label="50" value={50} />
                    <Picker.Item label="55" value={55} />
                    <Picker.Item label="60" value={60} />
                    <Picker.Item label="65" value={65} />
                    <Picker.Item label="70" value={70} />
                    <Picker.Item label="75" value={75} />
                    <Picker.Item label="80" value={80} />
                    <Picker.Item label="85" value={85} />
                    <Picker.Item label="90" value={90} />
                    <Picker.Item label="95" value={95} />
                    <Picker.Item label="100" value={100} />
                    <Picker.Item label="105" value={105} />
                    <Picker.Item label="110" value={110} />
                    <Picker.Item label="115" value={115} />
                    <Picker.Item label="120" value={120} />
                    <Picker.Item label="125" value={125} />
                    <Picker.Item label="130" value={130} />
                    <Picker.Item label="135" value={135} />
                    <Picker.Item label="140" value={140} />
                    <Picker.Item label="145" value={145} />
                    <Picker.Item label="150" value={150} />
                    <Picker.Item label="155" value={155} />
                    <Picker.Item label="160" value={160} />
                    <Picker.Item label="165" value={160} />
                    <Picker.Item label="170" value={170} />
                    <Picker.Item label="175" value={175} />
                    <Picker.Item label="180" value={180} />
                    <Picker.Item label="185" value={185} />
                    <Picker.Item label="190" value={190} />
                    <Picker.Item label="195" value={195} />
                    <Picker.Item label="200" value={200} />
                    <Picker.Item label="205" value={205} />
                    <Picker.Item label="210" value={210} />
                    <Picker.Item label="215" value={215} />
                    <Picker.Item label="220" value={220} />
                    <Picker.Item label="225" value={225} />
                    <Picker.Item label="230" value={230} />
                    <Picker.Item label="235" value={235} />
                    <Picker.Item label="240" value={240} />
                    <Picker.Item label="245" value={245} />
                    <Picker.Item label="250" value={250} />
                    <Picker.Item label="255" value={255} />
                    <Picker.Item label="260" value={260} />
                    <Picker.Item label="265" value={265} />
                    <Picker.Item label="270" value={270} />
                    <Picker.Item label="275" value={275} />
                    <Picker.Item label="280" value={280} />
                    <Picker.Item label="285" value={385} />
                    <Picker.Item label="290" value={290} />
                    <Picker.Item label="295" value={295} />
                    <Picker.Item label="300" value={300} />
                    <Picker.Item label="310" value={310} />
                    <Picker.Item label="320" value={320} />
                    <Picker.Item label="330" value={330} />
                    <Picker.Item label="340" value={340} />
                    <Picker.Item label="350" value={350} />
                    <Picker.Item label="360" value={360} />
                    <Picker.Item label="370" value={370} />
                    <Picker.Item label="380" value={380} />
                    <Picker.Item label="390" value={390} />
                    <Picker.Item label="400" value={400} />
                    <Picker.Item label="410" value={410} />
                    <Picker.Item label="420" value={420} />
                    <Picker.Item label="430" value={430} />
                    <Picker.Item label="440" value={440} />
                    <Picker.Item label="450" value={450} />
                    <Picker.Item label="460" value={460} />
                    <Picker.Item label="470" value={470} />
                    <Picker.Item label="480" value={480} />
                    <Picker.Item label="500" value={500} />
                    <Picker.Item label="520" value={520} />
                    <Picker.Item label="540" value={540} />
                    <Picker.Item label="560" value={560} />
                    <Picker.Item label="580" value={580} />
                    <Picker.Item label="600" value={600} />
                    <Picker.Item label="620" value={620} />
                    <Picker.Item label="640" value={640} />
                    <Picker.Item label="660" value={660} />
                    <Picker.Item label="680" value={680} />
                    <Picker.Item label="700" value={700} />
                    <Picker.Item label="720" value={720} />
                    <Picker.Item label="740" value={740} />
                    <Picker.Item label="760" value={760} />
                    <Picker.Item label="780" value={780} />
                    <Picker.Item label="800" value={800} />
                    <Picker.Item label="820" value={820} />
                    <Picker.Item label="840" value={840} />
                    <Picker.Item label="860" value={860} />
                    <Picker.Item label="880" value={880} />
                    <Picker.Item label="900" value={900} />
                    <Picker.Item label="920" value={920} />
                    <Picker.Item label="940" value={940} />
                    <Picker.Item label="960" value={960} />
                    <Picker.Item label="980" value={980} />
                    <Picker.Item label="1000" value={1000} />

                </Picker>
            </View>
            <View>
                {/* TYPE SELECTOR */}
                <Picker
                    selectedValue={this.state.type}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue => {
                        this.setState({type: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label="Swim" value="Swim" />
                    <Picker.Item label="Kick" value="Kick" />
                    <Picker.Item label="Pull" value="Pull" />
                    <Picker.Item label="Drill" value="Drill" />
                    <Picker.Item label="Underwater" value="Underwater" />
                </Picker>
            </View>
        </View>
    )
    }
}


const styles ={
    inputFieldContainer: {
        justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#DCEEFA',
        // flex:1,
        flexDirection: 'row'
        // justifyContent: 'center'
    },
//     welcomeTitle: {
//         fontFamily:  'Cochin',
//         fontSize: 50,
//         fontWeight: 'bold',
//         color: '#4592C6'

//     }
}



