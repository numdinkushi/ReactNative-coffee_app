import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};

  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }

    let categories = Object.keys(temp);
    categories.unshift('All');
    return categories;
  };
};

const getCoffeeList = (categoryIndex: number, category: string[] | undefined, data: any) => {
  if (category !== undefined && category[categoryIndex] === 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item: any) => item.name == category);
    return coffeeList;
  }
};

const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.BeansList);
  const [categories, setCategories] = useState([getCategoriesFromData(coffeeList)]);
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.index, categoryIndex.category, coffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};


const styles = StyleSheet.create({});

export default HomeScreen;