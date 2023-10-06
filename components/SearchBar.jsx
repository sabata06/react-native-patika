import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View>
      <View>
        <TextInput style={styles.SearchInput} placeholder="Ara..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchInput: {

    backgroundColor:  "#ECEFF1",
  
    margin: 10,
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
});

export default SearchBar;
