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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="EmailVal"
          component={EmailVal}
          options={{
            title: 'Sign Up'
          }} />
        <Stack.Screen name="PasswordVal" component={PasswordVal} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Verify" component={Verify} options={{ title: 'Sign Up' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
