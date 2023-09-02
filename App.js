import { View, Text, Button, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Appbar, List, Modal, PaperProvider, Portal, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import FormInsp from './src/Components/FormInsp';
import FormProof from './src/Components/FormProof';
import FormMan from './src/Components/FormMan';


export default function App() {
  const [task, setTask] = useState(null);
  const [showList, setShowList] = useState(false);
  return (
    <>
      <PaperProvider>
        <View style={styles.containerFields}>
          <TextInput label='Cliente' mode='outlined' ></TextInput>
          <TextInput label='Fecha' mode='outlined' ></TextInput>
          <TextInput label='Inspector' mode='outlined' ></TextInput>
        </View>

        <Pressable onPress={() => setShowList(!showList)}>
          <Appbar>
            <Appbar.Action icon="menu" />
            <Appbar.Content title={task ? `Tareas > ${task}` : `Tareas`} />
          </Appbar>
        </Pressable>

        {showList &&


          <Portal>
            <Modal visible={showList} contentContainerStyle={{backgroundColor: 'white', padding: 20}}>

              <List.Section >
                <List.Item title="Inspección" onPress={() => { setTask("Inspección"), setShowList(!showList) }} />
                <List.Item title="Prueba" onPress={() => { setTask("Prueba"), setShowList(!showList) }} />
                <List.Item title="Mantenimiento" onPress={() => { setTask("Mantenimiento"), setShowList(!showList) }} />
              </List.Section>

            </Modal>
          </Portal>
        }
        <ScrollView>
          {task === "Inspección" ?
            <FormInsp />
            :
            task === "Prueba" ?
              <FormProof />
              :
              task === "Mantenimiento" ?
                <FormMan />
                :
                null
          }
        </ScrollView>

        <StatusBar style='dark-content' backgroundColor="gray" translucent={false} />
      </PaperProvider>

    </>
  );
}

const styles = StyleSheet.create({
  containerFields: {
    justifyContent: 'center',
    padding: 10,
  }
})