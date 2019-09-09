import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('To dopiero początek tworzenia aplikacji w RN'); 

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change text" onPress={() => setOutputText('Text changed!')}/>
      <Button title="back to previous text" onPress={() => setOutputText('why it doesnt work')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
