import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function AddTodo({sumbitHandler}) {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Tambahkan Sigma"
        onChangeText={changeHandler}
      />
      <Button onPress={() => sumbitHandler(text)} title="Simpan" color='blue'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});
