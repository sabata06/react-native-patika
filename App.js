import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard.";
import product from "./products.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>E-STORE</Text>
      <SearchBar />
      
      <FlatList
       keyExtractor={item=>item.id.toString()}
      numColumns={2}
        data={product}
        renderItem={({ item }) => <ProductCard pro={item} />}
      />
    
      {/* <StatusBar style="auto" /> */}


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    
  },

  header: {
    textAlign:"center",
    fontSize: 30,
    color: "blue",
    fontWeight: "800",
  },
});
