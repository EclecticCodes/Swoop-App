import React from 'react';
import { View, ScrollView, Text } from 'react-native';
//import CatCard from '../components/CatCard'; 
// Change the import above once code is populated

const HomeScreen = () => {
  const cats = [
    { name: 'Whiskers', age: 2, image: 'https://example.com/cat1.jpg' },
    { name: 'Mittens', age: 3, image: 'https://example.com/cat2.jpg' },
  ];

  return (
    <ScrollView>
      <Text>Featured Cats</Text>
      {/*  {cats.map((cat, index) => (
        <CatCard key={index} {...cat} /> 
      ))}*/}
    
    </ScrollView>
  );
};

export default HomeScreen;
