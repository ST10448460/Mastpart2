import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen';
import beveragesScreen from './screens/beveragesScreen';
import Mainscreen from './screens/Mainscreen';
import DessertsScreen from './screens/DessertsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Beverages" component={beveragesScreen} />
        <Stack.Screen name="Main" component={Mainscreen} />
        <Stack.Screen name="Desserts" component={DessertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default  App;