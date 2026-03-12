import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from './Routes';
import TabRouter from './Tabrouter';

const Stack = createNativeStackNavigator();

const Router: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.Tabrouter} component={TabRouter} />
    </Stack.Navigator>
  );
};

export default Router;
