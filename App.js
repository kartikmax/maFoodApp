import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./components/Card";
import foodData from "./food.json";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MA Food Wala</Text>
      </View>
      <ScrollView style={styles.cardContainer}>
        {foodData.map((item, index) => (
          <Card
            key={index}
            food={item.food.toUpperCase()}
            rate={item.rate}
            image={item.image}
            description={item.description}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#03a9f4", // Uber Eats blue color
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
});
