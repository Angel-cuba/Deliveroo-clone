import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid';

const Restaurant = ({
  id,
  imgUrl,
  title,
  description,
  rating,
  genre,
  address,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-xs">
      <Image source={{ uri: `${imgUrl}` }} className="h-36 w-64 rounded" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity="0.5" size={22} />
          <Text className="text-gray-700 text-sm">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View>
          <LocationMarkerIcon color="green" size={20} opacity={0.5}/>
          <Text className="text-gray-700 text-sm">Near by {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurant;
