import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ProductCard = ({ pro }) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image  style={styles.image} source={{uri:pro.imgURL}} />
        </View>
        <Text style={styles.title}>{pro.title}</Text>
        <Text style={styles.price}>{pro.price} </Text>
        <Text style={styles.inStock}>{pro.inStock ? "" : "STOKTA YOK"} </Text>
        
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ECEFF1",
    margin:7,
    borderRadius:10,
    width:190,
    height:300,
    alignItems:"center",
  },
  imageContainer: {
    padding:5,
    marginTop:15
  },
  image: {
    borderRadius:10,
    width: 160,
    height: 180,
  },
  title: {
    fontWeight: 'bold',
    width:160

  },
  price: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize:16,
    
  },
  inStock: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'red'
  },
});

export default ProductCard;
