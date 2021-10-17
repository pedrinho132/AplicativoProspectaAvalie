import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import PerfilCliente from './PerfilCliente/perfilCliente';
import preloadCadastro from './Preload/preloadCadastro';
import Laudo from './Pedido/laudo';




 const MainTabNavigation = ({ route,navigation }) => {

  
  const Tab = createMaterialBottomTabNavigator();
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#2b848a"
      barStyle={{ backgroundColor: '#113d35' }}
    >
      <Tab.Screen
        name="Home"
        component={PerfilCliente}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Vistorias"
        component={Laudo}
        options={{
          tabBarLabel: 'Vistorias',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={preloadCadastro}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default MainTabNavigation;