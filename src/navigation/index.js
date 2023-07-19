import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screen/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default RootStack;
