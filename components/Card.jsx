import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const Card = ({ food, rate, image, description }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.foodName}>{food}</Text>
        <Text style={styles.rate}>{`Half: ${rate.half} | Full: ${rate.full}`}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f5e9",
    borderRadius: 10, // Add border radius
    marginVertical: 10,
    padding: 16, // Add padding
    width: "90%",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10, // Add border radius
  },
  content: {
    paddingTop: 10,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  rate: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#777",
  },
});

export default Card;
