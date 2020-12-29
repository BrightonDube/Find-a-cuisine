import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.ratingStyle}>
        Rating: {result.rating} stars. Reviews: {result.review_count}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: 180,
    width: 200,
  },
  ratingStyle: {
    color: "gray",
  },
  wrapper: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  nameStyle: {
    fontWeight: "bold",
  },
});
export default ResultsDetail;
