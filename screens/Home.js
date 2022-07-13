import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../parts/Categories';

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
      {/* Header */}
      <Header />
      {/* Search */}
      <Search />
      {/* Content */}
      <Categories />
    </SafeAreaView>
  );
}
