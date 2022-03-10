import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.conatiner}>
      <Text style={styles.header}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text>{result.display_phone}</Text>
      <Text>{result.location.display_address}</Text>
      <Text>{result.location.country}</Text>
      <Text>{result.hours.open}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  conatiner: {
    marginLeft: 15
  },
  image: {
    height: 100,
    width: 200,
    borderRadius: 4,
    marginBottom: 5
  }
});

export default ResultsShowScreen;
