import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"
import { Homescreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import {MaterialCommunityIcons} from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

export const RootNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="inicial"
            opitions={{
            headerShown: false,
            tittle: "tela incial Feliz",
            }}
            component={LoginScreen}/>
            <Stack.Screen name="Cadastro"
            opitions={{
            headerShown: false,
            tittle: "tela incial Feliz",
            }}
            component={LoginScreen}/>
            <Stack.Screen name="HomeNavigation" 
             opitions={{
                headerShown: false,
                tittle: "tela incial Feliz",
                }}
            component={TabNavigation}/>
        </Stack.Navigator>
    );
}
const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homescreen}
            opitions={{
                tabBarLabel: "Home",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="Home" color={color} size={26}/>
                ),
            }}
            />
            <Tab.Screen name="Home2" component={Homescreen}/>
            <Tab.Screen name="Home3" component={Homescreen}/>
        </Tab.Navigator>
    );
}