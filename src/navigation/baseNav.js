import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import VideoPlaycreen from '../screens/videoPlayScreen';
import TvScreen from '../screens/tvScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const TvStack = createNativeStackNavigator();

const headerStyling = {
  headerStyle: {
    backgroundColor: '#15212A',
  },
  headerTintColor: '#CED6DC',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  barStyle :'light-content'
}

function HomeStackScreens(){
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false , ...headerStyling}}
        />
        <HomeStack.Screen 
          name="VideoPlayScreen" 
          component={VideoPlaycreen}
          options={{...headerStyling}}
        />
      </HomeStack.Navigator>
  );
}

function TvStackScreens(){
  return (
      <TvStack.Navigator>
        <TvStack.Screen
          name="tvScreen"
          component={TvScreen}
          options={{headerShown: false , ...headerStyling}}
        />
        <TvStack.Screen 
          name="tvPlay" 
          component={VideoPlaycreen}
          options={{...headerStyling}}
        />
      </TvStack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'compass'
            : 'compass-outline';
        } 
        else if (route.name === 'Tv') {
          iconName = focused ? 'tv' : 'tv-outline';
        }
        else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
        tabBarActiveTintColor: '#636e72',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#11191F',
          height: 55,
          paddingBottom: 5,
          borderTopWidth: 0,
        }
      })}>
      <Tab.Screen name="Home" component={HomeStackScreens} options={{ headerShown: false }} />
      <Tab.Screen name="Tv" component={TvStackScreens}  options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
