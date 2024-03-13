import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import React from 'react';
import TabNavigators from './src/navigators/TabNavigator';

const stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="TabNavigator" component={TabNavigators} options={{ animation: 'slide_from_bottom' }} />
      <stack.Screen name="Details" component={DetailScreen} options={{ animation: 'slide_from_bottom' }} />
      <stack.Screen name="Payment" component={PaymentScreen} options={{ animation: 'slide_from_bottom' }} />
    </stack.Navigator>
  </NavigationContainer>;
};

export default App;

