import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Card/Category';

const Categories = () => {
  return (
    <ScrollView
      className="bg-red-200"
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Category
        imgUrl="https://res.cloudinary.com/dqaerysgb/image/upload/v1635267338/restaurat-bar_m41i8l.jpg"
        title="Restaurat 1"
      />
      <Category
        imgUrl="https://res.cloudinary.com/dqaerysgb/image/upload/v1635267338/restaurat-bar_m41i8l.jpg"
        title="Restaurat 2"
      />
      <Category
        imgUrl="https://res.cloudinary.com/dqaerysgb/image/upload/v1635267338/restaurat-bar_m41i8l.jpg"
        title="Restaurat 3"
      />
    </ScrollView>
  );
};

export default Categories;
