import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Providers} from './src/store/provider';
import {StackNavigation} from './src/navigations/stackNavigation/StackNavigation';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Providers>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Providers>
  );
}

export default App;
