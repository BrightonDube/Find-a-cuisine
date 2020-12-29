import React from "react";
import { TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from "@react-navigation/native";

const Results = ({ title, results }) => {
  if (!results.length) {
    return null;
  }
  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.h1}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity
            result={item}
            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
          >
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default Results;
