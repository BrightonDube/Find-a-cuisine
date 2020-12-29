import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Results from "../Components/ResultsList";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermComplete={() => searchApi(term)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Results results={filterResultsByPrice("$")} title="Budget" />
        <Results results={filterResultsByPrice("$$")} title="Midrange" />
        <Results results={filterResultsByPrice("$$$")} title="Premium" />
      </ScrollView>
      {errorMessage ? (
        <Text>Something went wrong, please try again later!</Text>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
