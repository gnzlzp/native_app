import { StyleSheet, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { useState } from 'react';

const TextInputs = ({ obj }) => {

  const renderView = () => {

    const [pressure, setPressure] = useState('');

    switch (obj.question) {
      case 'Registre las presiones de encendido y apagado del motor en el control eléctrico [psi].':
        return (
          <View>
            <View style={styles.input}>
              <TextInput mode="outlined" inputMode="numeric" right={<TextInput.Affix text="PSI" />} label='Presión de encendido' placeholderTextColor={'lightgrey'} style={styles.text} value={pressure} onChangeText={()=>setPressure(pressure)}/>
            </View>
            <View style={styles.input}>
              <TextInput mode="outlined" inputMode="numeric" right={<TextInput.Affix text="PSI" />} label='Presión de apagado' />
            </View>
          </View>
        );
      case 'Registre día de la semana y hora de inicio de la prueba automática (realizar la observación respectiva si la prueba se realiza en un día/hora diferente a la programada).':
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
