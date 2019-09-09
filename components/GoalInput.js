import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Dadaj zadanie"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={{flexDirection: 'row', padding: 20}}>
          <Button
            title="Nie dodawaj zadania!"
            color="red"
            onPress={props.canceled}
            style={styles.button}
          />
          <Button
            title="Dodaj nowe zadanie!"
            style={styles.button}
            onPress={addGoalHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textInput: {
    borderBottomColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: "80%"
  },
  button: {
    borderRadius: 4,
    padding: 20
  }
});

export default GoalInput;
