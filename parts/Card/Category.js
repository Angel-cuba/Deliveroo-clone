import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Category = ({ imgUrl, title }) => {
  console.log(imgUrl);
  return (
    <TouchableOpacity className="relative mr-4">
      <Image source={{ uri: `${imgUrl}` }} style={{ width: 60, height: 40 }} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
