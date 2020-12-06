import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#1B3864",
    alignItems: "center",
    justifyContent: "center",
  },
  headertitle: {
    color: "white",
    fontSize: 25,
    borderBottomColor: "white",
    borderBottomWidth: 4,
    paddingBottom: 17,
    fontFamily: "ghost-reg",
  },
});
export default Header;
