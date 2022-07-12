import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
} from 'react-native-heroicons/solid';
import {
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';

export default function HomeScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Home Page',
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-slate-50 pt-5">
      <Text className="text-red-800">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{ uri: 'https://picsum.photos/id/10/200/300' }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-gray-500 font-bold text-xs">Deliver now...</Text>
            <Text className="text-gray-700 font-bold text-xl">
              Current location:
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 px-4 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-slate-200 p-3 ">
            <SearchIcon size={20} color="gray" />
            <TextInput placeholder="Search restaurants and cuisines" keyboardType="default" />
          </View>
          <AdjustmentsIcon size={20} color="#00CCBB" />
        </View>

        {/* Content */}
        
      </Text>
    </SafeAreaView>
  );
}
