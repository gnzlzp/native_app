import { View } from "react-native";
import { Divider, List } from "react-native-paper";
const { listMan } = require('../../assets/listMan.js')



function FormMan() {
  return (
    <>
      {
        listMan.map((item, index) =>
          <>
            <List.Item key={index} title={item[`act${index + 1}`]} titleNumberOfLines={8} />
            <Divider />
          </>

        )
      }
    </>
  )
}
export default FormMan