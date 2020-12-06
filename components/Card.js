import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "#dfdfdf",
    elevation: 5,
    marginVertical: 40,
    padding: 30,
    borderRadius: 10,
  },
});
export default Card;
