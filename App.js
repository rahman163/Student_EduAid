import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase/firebase';

import Home from './Pages/Screens/Home';
import UsersInfo from './Pages/Screens/UsersInfo';
import Login from './Pages/Screens/Login';
import ResetPass from './Pages/Screens/ResetPass';
import Registration from './Pages/Screens/Registration';
import About_Kict from './Pages/Screens/About_Kict';
import Student_Materials from './Pages/Screens/Student_Materials';
import Services from './Pages/Screens/Services';
import Contact_info from './Pages/Screens/Contact_info';
import LogOut from './Pages/Screens/LogOut';
import Dashboard from './Pages/Screens/Dashboard';
import Feedback from './Pages/Screens/Feedback';
import Required_Sub from './Pages/Screens/Required_Sub';
import S_Sub from './Pages/Screens/S_Sub';
import Get_A_Tutor from './Pages/Screens/Get_A_Tutor';
import Be_A_Tutor from './Pages/Screens/Be_A_Tutor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f50a',
          },
          headerTintColor: '#140000',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UsersInfo"
          component={UsersInfo}
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen
          name="About_Kict"
          component={About_Kict}
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen
          name="Student_Materials"
          component={Student_Materials}
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen
          name="Services"
          component={Services}
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen
          name="Contact_info"
          component={Contact_info}
          options={{ headerTitleAlign: 'center', }}
        />
        

        <Stack.Screen
          name="LogOut"
          component={LogOut}
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="Required_Sub"
          component={Required_Sub}
          options={{ headerTitleAlign: 'center', }}
        />

<Stack.Screen
          name="S_Sub"
          component={S_Sub}
          options={{ headerTitleAlign: 'center', }}
        />

<Stack.Screen
          name="Get_A_Tutor"
          component={Get_A_Tutor}
          options={{ headerTitleAlign: 'center', }}
        />

<Stack.Screen
          name="Be_A_Tutor"
          component={Be_A_Tutor}
          options={{ headerTitleAlign: 'center', }}
        />


        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ headerTitleAlign: 'center', }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
