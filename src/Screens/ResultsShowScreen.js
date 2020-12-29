import React, { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { Feather } from "@expo/vector-icons";

const ResultsShow = ({ route }) => {
  const [results, setResults] = useState(null);
  const id = route.params.id;

  const getResults = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getResults(id);
  }, []);

  if (!results) {
    return null;
  }
  return (
    <>
      <Text style={styles.nameStyle}>{results.name}</Text>
      <Text style={{ marginLeft: 10, marginBottom: 10 }}>
        <Feather name="phone" />: {results.display_phone}
      </Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <>
            <Image style={styles.imageStyle} source={{ uri: item }} />
          </>
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  imageStyle: {
    width: 340,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
export default ResultsShow;
