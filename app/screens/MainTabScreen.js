import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import CoCard from './Card'
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import WebviewScreen from './WebviewScreen';
import ServiScreen  from './ServiScreen'
import { TabRouter } from '@react-navigation/routers';

const HomeStack = createStackNavigator();
const WebStack= createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();
const ExploresStack = createStackNavigator();
const ServiStack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#EF578E',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergencia"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Emergencia',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-call" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'SOS',
        
          tabBarColor: '#FAAD2A',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Servi"
        component={ServiStackScreen}
        options={{
          tabBarLabel: 'ServicioSocial',
        
          tabBarColor: '#FAAD2A',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
      />

       <Tab.Screen
        name="Settings"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Ajustes',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#EF578E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'HATI-HATI',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
<WebStack.Screen name="Denuncia" component={WebviewScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
<ProfilesStack.Screen name="Lugares Seguro" component={ProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
<DetailsStack.Screen name="Numero de Emergencia" component={DetailsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        title:'Numeros de Emergencia',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);


const ServiStackScreen = ({navigation}) => (
  <ServiStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#1f65ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ServiStack.Screen name="Servio social" component={ServiScreen} options={{
          title:'Servicios Sociales',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ServiStack.Navigator>
  );

const ProfileStackScreen = ({navigation}) => (
  <ProfilesStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#FAAD2A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ProfilesStack.Screen name="Lugares Seguros" component={ProfileScreen} options={{
          title:'Lugares Seguros',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#FAAD2A" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  
  </ProfilesStack.Navigator>
  );
  const ExploreStackScreen = ({navigation}) => (
    <ExploresStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExploresStack.Screen name="Setting" component={ExploreScreen} options={{
            title:'Ajuste',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    
    </ExploresStack.Navigator>
  );
  