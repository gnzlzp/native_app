import { Divider, Text, RadioButton, Button } from 'react-native-paper';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';


const condition = ['Mal', 'Bien', 'No Presenta'];

function RadioButtons({ index, obj, setObj }) {

  const indexAct = index

  const [value, setValue] = useState('');

  const handleObj = (value) => {
    const updateObj = [...obj]
    updateObj[index].answer = value;
    setObj(updateObj)
    setValue(value)
  }
  
  return (
    <>

      <RadioButton.Group onValueChange={handleObj} value={obj[indexAct].answer} >
        {condition.map((cond, index) => (
          <>
            <View style={styles.container}>
              <TouchableOpacity key={index} style={styles.checks} onPress={() => handleObj(cond)}>
                <RadioButton key={index} value={cond} status={obj[indexAct].answer === cond ? 'checked' : 'unchecked'} />
                <Text style={styles.text}>{cond}</Text>
              </TouchableOpacity>
            </View>
          </>
        ))}
      </RadioButton.Group>
      <Divider />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#DDE6ED',
  },
  checks: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,

  },
})
export default RadioButtons;
