import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { updateItemAnswer } from "../../redux/listInspecSlice";

const TextInputs = ({ itemID }) => {

  
  const renderView = () => {

    const obj = useSelector((state) => state.listInspec)
    const [pressure, setPressure] = useState({pressureOn: '', pressureOff: ''});
    
    useEffect(() => {
      console.log('lista de inputs', '->', obj)
      console.log('presiones','->',pressure)
    }, [])
  
    const dispatch = useDispatch();
  

    const handleAnswerChange = (value, fieldName) => {
      switch (fieldName) {
        case 'pressureOn':
          setPressure({ ...pressure, pressureOn: value });
          break;
        case 'pressureOff':
          setPressure({ ...pressure, pressureOff: value });
          break;
        default:
          break;
      }
      dispatch(updateItemAnswer({ id:itemID, answer: pressure }));
    
    };



    switch (itemID) {
      case 13:
        return (
          <View>
            <View style={styles.input}>
              <TextInput
                mode="outlined"
                inputMode="numeric"
                right={<TextInput.Affix text="PSI" />}
                label='Presión de encendido'
                placeholderTextColor={'lightgrey'}
                style={styles.text}
                value={pressure.pressureOn}
                onChangeText={(value) => handleAnswerChange(value, 'pressureOn')}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                mode="outlined"
                inputMode="numeric"
                right={<TextInput.Affix text="PSI" />}
                label='Presión de apagado'
                value={pressure.pressureOff}
                onChangeText={(value) => handleAnswerChange(value, 'pressureOff')}
              />
            </View>
          </View>
        );
      case 14:
        return (
          <View>
            <View style={styles.container}>
              <View style={styles.input}>
                <TextInput mode="outlined" placeholderTextColor={'lightgrey'} label='Fecha' />
              </View>
              <View style={styles.input}>
                <TextInput mode="outlined" label='Hora' placeholder="HH:MM am/pm" placeholderTextColor={'lightgrey'} />
              </View>
            </View>
          </View>
        );
      default:
        break;
    }
  }

  return (
    <View>
      {renderView()}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '50%',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  }
});

export default TextInputs;
