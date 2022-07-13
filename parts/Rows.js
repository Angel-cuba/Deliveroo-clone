import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon, ArrowUpIcon } from 'react-native-heroicons/outline';
import Restaurant from './Restaurant/Restaurant';

const Rows = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4 bg-slate-50">
        <Text className="text-red-700 font-bold text-xl">{title}</Text>

        <ArrowRightIcon color="#00CCbb" />
      </View>
      <Text className="text-xs text-gray-800 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {/* Restaurants  cards */}
        <Restaurant
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant"
          rating="4.5"
          genre="discover"
          address="123 Main St"
          description="Some description"
          dishes={[]}
          long={20}
          lat={20}
        />
         <Restaurant
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant"
          rating="4.5"
          genre="discover"
          address="123 Main St"
          description="Some description"
          dishes={[]}
          long={20}
          lat={20}
        />
         <Restaurant
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant"
          rating="4.5"
          genre="discover"
          address="123 Main St"
          description="Some description"
          dishes={[]}
          long={20}
          lat={20}
        />
         <Restaurant
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant"
          rating="4.5"
          genre="discover"
          address="123 Main St"
          description="Some description"
          dishes={[]}
          long={20}
          lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default Rows;
