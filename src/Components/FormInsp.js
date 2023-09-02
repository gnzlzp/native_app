import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, List } from 'react-native-paper';
import { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import RadioButtons from "./RadioButtons";
import TextInputs from './TextInputs';
const { listInspec } = require('../../assets/listInspec.js');
import uuid from 'react-native-uuid';

function FormInsp() {

  const [obj, setObj] = useState(listInspec)

   const storageData = async (value) => {
    try {
      await AsyncStorage.setItem('inspec', JSON.stringify(value));
    }
    catch (e) {
      console.log(error, e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('inspec');
      return value !== null ? value : null;
    }
    catch (e) {
      console.log(error, e);
    }
  }

  const handleSave = () => {
    storageData(obj);

  }
  const viewData = async () => {
    const x = await getData();
    console.log(x);
  }

  const reset = async () => {
    try {
      await AsyncStorage.removeItem('inspec');
      setObj(listInspec);
    } catch (error) {

    }
    console.log('local store clear');
  }
  return (
    <>
      {obj.map((item, index) => {
        return (
          <>
            <List.Item key={index} title={item.question} titleStyle={styles.titleTask} titleNumberOfLines={5} style={styles.titleTask} />
            {item.type === 'input'
              ? <TextInputs key={uuid.v4()} index={index} obj={item} setObj={setObj} />
              : <RadioButtons key={uuid.v4()} index={index} obj={obj} setObj={setObj} />
            }
          </>
        )
      }
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button mode='elevated' style={{ marginTop: 20, marginBottom: 20, width: 150 }} onPress={handleSave}>Salvar</Button>
        <Button mode='elevated' style={{ marginTop: 20, marginBottom: 20, width: 150 }} onPress={viewData}>ver localstorage</Button>
        <Button mode='elevated' style={{ marginTop: 20, marginBottom: 20, width: 150 }} onPress={reset}>reset</Button>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  titleTask: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: "#27374D",
    textShadowRadius: 4,
    textShadowOffset: { width: -1, height: 1 },
  },
  titleList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

})

export default FormInsp