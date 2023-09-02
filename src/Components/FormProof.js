import { useState } from "react";
import { Divider, List } from "react-native-paper";
const { listProof } = require('../../assets/listProof.js');

function FormProof() {
  return (
    <>
      {listProof.map((item, index) =>
        <>
          <List.Item key={index} title={item[`act${index + 1}`]} titleNumberOfLines={8} />
          <Divider />
        </>
      )}
    </>
  )
}
export default FormProof