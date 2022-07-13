import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../parts/Categories';
import Rows from '../parts/Rows';

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

      {/* Featured rows */}
      <Rows id="123" title="Featured for u" description="Some description" />
      <Rows id="124" title="Tasty Discounts" description="Some description" />
      <Rows id="125" title="Offers near you!" description="Some description" />

    </SafeAreaView>
  );
}
