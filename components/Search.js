import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'

const Search = () => {
  return (
     <View className="flex-row items-center space-x-2 pb-2 px-4 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-slate-200 p-3 ">
            <SearchIcon size={20} color="gray" />
            <TextInput placeholder="Search restaurants and cuisines" keyboardType="default" />
          </View>
          <AdjustmentsIcon size={20} color="#00CCBB" />
        </View>
  )
}

export default Search