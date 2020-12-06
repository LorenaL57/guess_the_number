import React from "react";
import { StyleSheet, Text, View } from "react-native";
const BodyText = (props) => {
  return <Text style={styles.bodyText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "ghost-std",
    fontSize: 18,
  },
});
export default BodyText;
