import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import CreateAccount from './src/pages/CreateAccount';
import EmailVal from './src/pages/EmailVal';
import PasswordVal from './src/pages/PasswordVal';
import Verify from './src/pages/Verify';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="EmailVal" component={EmailVal} />
        <Stack.Screen name="PasswordVal" component={PasswordVal} />
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
