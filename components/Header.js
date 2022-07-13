import { View, Text, Image } from 'react-native'
import React from 'react'
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/solid'

const Header = () => {
  return (
     <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1635267338/restaurat-bar_m41i8l.jpg' }}
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
  )
}

export default Header