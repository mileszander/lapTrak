import React from 'react';
import {View, Text, Picker} from 'react-native';




const InputFields = ({swim, setWorkOut}) => {
    return (
        //parent Container
        <View style={styles.inputFieldContainer}>
            <View>
                {/* STROKE SELECTOR */}
                <Picker
                    selectedValue={swim.stroke}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        setWorkOut({stroke: itemValue})
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
                    selectedValue={swim.distance}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        setWorkOut({distance:itemValue})
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
                    selectedValue={swim.count}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        setWorkOut({count: itemValue})
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
                    selectedValue={swim.interval}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue => {
                        setWorkOut({interval: itemValue})
                        }
                    )}
                    >
                    <Picker.Item label=":05" value={5} />
                    <Picker.Item label=":10" value={10} />
                    <Picker.Item label=":15" value={15} />
                    <Picker.Item label=":20" value={20} />
                    <Picker.Item label=":25" value={25} />
                    <Picker.Item label=":30" value={30} />
                    <Picker.Item label=":35" value={35} />
                    <Picker.Item label=":40" value={40} />
                    <Picker.Item label=":45" value={45} />
                    <Picker.Item label=":50" value={50} />
                    <Picker.Item label=":55" value={55} />
                    <Picker.Item label="1:00" value={60} />
                    <Picker.Item label="1:05" value={65} />
                    <Picker.Item label="1:10" value={70} />
                    <Picker.Item label="1:15" value={75} />
                    <Picker.Item label="1:20" value={80} />
                    <Picker.Item label="1:25" value={85} />
                    <Picker.Item label="1:30" value={90} />
                    <Picker.Item label="1:35" value={95} />
                    <Picker.Item label="1:40" value={100} />
                    <Picker.Item label="1:45" value={105} />
                    <Picker.Item label="1:50" value={110} />
                    <Picker.Item label="1:55" value={115} />
                    <Picker.Item label="2:00" value={120} />
                    <Picker.Item label="2:05" value={125} />
                    <Picker.Item label="2:10" value={130} />
                    <Picker.Item label="2:15" value={135} />
                    <Picker.Item label="2:20" value={140} />
                    <Picker.Item label="2:25" value={145} />
                    <Picker.Item label="2:30" value={150} />
                    <Picker.Item label="2:35" value={155} />
                    <Picker.Item label="2:40" value={160} />
                    <Picker.Item label="2:45" value={165} />
                    <Picker.Item label="2:50" value={170} />
                    <Picker.Item label="2:55" value={175} />
                    <Picker.Item label="3:00" value={180} />
                    <Picker.Item label="3:05" value={185} />
                    <Picker.Item label="3:10" value={190} />
                    <Picker.Item label="3:15" value={195} />
                    <Picker.Item label="3:20" value={200} />
                    <Picker.Item label="3:25" value={205} />
                    <Picker.Item label="3:30" value={210} />
                    <Picker.Item label="3:35" value={215} />
                    <Picker.Item label="3:40" value={220} />
                    <Picker.Item label="3:45" value={225} />
                    <Picker.Item label="3:50" value={230} />
                    <Picker.Item label="3:55" value={235} />
                    <Picker.Item label="4:00" value={240} />
                    <Picker.Item label="4:05" value={245} />
                    <Picker.Item label="4:10" value={250} />
                    <Picker.Item label="4:15" value={255} />
                    <Picker.Item label="4:20" value={260} />
                    <Picker.Item label="4:25" value={265} />
                    <Picker.Item label="4:30" value={270} />
                    <Picker.Item label="4:35" value={275} />
                    <Picker.Item label="4:40" value={280} />
                    <Picker.Item label="4:45" value={385} />
                    <Picker.Item label="4:50" value={290} />
                    <Picker.Item label="4:55" value={295} />
                    <Picker.Item label="5:00" value={300} />
                    <Picker.Item label="5:10" value={310} />
                    <Picker.Item label="5:20" value={320} />
                    <Picker.Item label="5:30" value={330} />
                    <Picker.Item label="5:40" value={340} />
                    <Picker.Item label="5:50" value={350} />
                    <Picker.Item label="6:00" value={360} />
                    <Picker.Item label="6:10" value={370} />
                    <Picker.Item label="6:20" value={380} />
                    <Picker.Item label="6:30" value={390} />
                    <Picker.Item label="6:40" value={400} />
                    <Picker.Item label="6:50" value={410} />
                    <Picker.Item label="7:00" value={420} />
                    <Picker.Item label="7:10" value={430} />
                    <Picker.Item label="7:20" value={440} />
                    <Picker.Item label="7:30" value={450} />
                    <Picker.Item label="7:40" value={460} />
                    <Picker.Item label="7:50" value={470} />
                    <Picker.Item label="8:00" value={480} />
                    <Picker.Item label="8:20" value={500} />
                    <Picker.Item label="8:40" value={520} />
                    <Picker.Item label="9:00" value={540} />
                    <Picker.Item label="9:20" value={560} />
                    <Picker.Item label="9:40" value={580} />
                    <Picker.Item label="10:00" value={600} />
                    <Picker.Item label="10:20" value={620} />
                    <Picker.Item label="10:40" value={640} />
                    <Picker.Item label="11:00" value={660} />
                    <Picker.Item label="11:20" value={680} />
                    <Picker.Item label="11:40" value={700} />
                    <Picker.Item label="12:00" value={720} />
                    <Picker.Item label="12:20" value={740} />
                    <Picker.Item label="12:40" value={760} />
                    <Picker.Item label="13:00" value={780} />
                    <Picker.Item label="13:20" value={800} />
                    <Picker.Item label="13:40" value={820} />
                    <Picker.Item label="14:00" value={840} />
                    <Picker.Item label="14:20" value={860} />
                    <Picker.Item label="14:40" value={880} />
                    <Picker.Item label="15:00" value={900} />
                    <Picker.Item label="15:20" value={920} />
                    <Picker.Item label="15:40" value={940} />
                    <Picker.Item label="16:00" value={960} />
                    <Picker.Item label="16:20" value={980} />
                    <Picker.Item label="16:40" value={1000} />
                    <Picker.Item label="17:00" value={1020} />

                </Picker>
            </View>
            <View>
                {/* TYPE SELECTOR */}
                <Picker
                    selectedValue={swim.type}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue => {
                        setWorkOut({type: itemValue})
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


const styles ={
    inputFieldContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#DCEEFA',
        flexDirection: 'row'
    },
}

export default InputFields




