import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermComplete }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search..."
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermComplete}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 10,
  },
  iconStyle: {
    marginHorizontal: 10,
    fontSize: 30,
    alignSelf: "center",
  },
});
export default SearchBar;
