import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <View styles={styles.welcome}>
        <Text
          style={{
            alignItems: "center",
            textAlign: "center",
            fontSize: 20,
            padding: 10,
            color: "white"
          }}
        >
          Aplikacja Jakuba & Mari do tworzenia listy zakupów.
        </Text>
      </View>
      <Button title="Dodaj produkt do kupienia!" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        canceled={() => setIsAddMode(false)}
      />
      {}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    padding: 50,
    color: "white",
    height: "100%"
  },
  welcome: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});
