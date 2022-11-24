import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import Home from '../Frontend/Home/Home'
import MoreApps from '../Frontend/MoreApps/MoreApps'
import BuyNow from '../Frontend/buyNow/BuyNow'
import Subscribes from '../Frontend/Subscribes/Subscribes'
import ConnectWithSeeraht from '../Frontend/ConnectWithSeeraht/ConnectWithSeeraht'
import AboutSeeraht from '../Frontend/AboutSeeraht/AboutUs'
import HelpSeeraht from '../Frontend/HelpSeeraht/HelpSeeraht'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import CustomSidebarMenu from "./CustomSideBar";
import { createStackNavigator } from '@react-navigation/stack'
import Lesson from "../Frontend/Book/Lesson1"
import { useAuthContext } from '../Context/Context'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

const MyStack = () => {
    const { pageInfo } = useAuthContext();
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name='MyDrawer' component={MyDrawer} />
            <Stack.Screen
                options={{
                    title: pageInfo.title,
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        textAlign: "center",
                        justifyContent: "center"
                    },
                }}
                name='Lesson1' component={Lesson} />
        </Stack.Navigator>
    )
}


const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            screenOptions={{
                drawerActiveBackgroundColor: "#9E1f63",
                drawerActiveTintColor: "#fff",
                drawerInactiveColor: "#000",
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontsize: 15,
                },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >

            <Drawer.Screen name='Home' component={Home}
                options={{
                    headerTitle: "بچیوں کی نماز",
                    headerTitleAlign: "center",
                    title: "Bachon Ki Namaz",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },

                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="menu-book" color={color} size={20}
                        />
                    ),
                }}
            />
            <Drawer.Screen name='BuyNow' component={BuyNow}
                options={{
                    title: "Buy Now",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    },
                    drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="shopping-cart" color={color} size={20}
                        />
                    ),
                }}
            />
            <Drawer.Screen name='ConnectWithSeeraht' component={ConnectWithSeeraht}
                options={{
                    headerTitle: "Digitial Seeraht",
                    title: "Connect With Seeraht",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <Octicons name="link" color={color} size={20}
                        />
                    ),
                }} />
            <Drawer.Screen name='AboutUs' component={AboutSeeraht}
                options={{
                    title: "About Seeraht",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="info" color={color} size={20}
                        />
                    ),
                }} />
            <Drawer.Screen name='HelpSeeraht' component={HelpSeeraht}
                options={{
                    title: "Help Seeraht",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <FontAwesome5 name="hands-helping" color={color} size={20}
                        />
                    ),
                }} />
            <Drawer.Screen name='MoreApps' component={MoreApps}
                options={{
                    title: "More Apps",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <FontAwesome5Pro name="google-play" color={color} size={20}
                        />
                    ),
                }} />
            <Drawer.Screen name='subscribeForWhatsApp' component={Subscribes}
                options={{
                    title: "Subscribe For WhatsApp",
                    headerStyle: {
                        backgroundColor: "#9e1f63"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                    }, drawerLabelStyle: {
                        marginLeft: 1
                    },
                    drawerIcon: ({ color }) => (
                        <FontAwesome5Pro name="whatsapp" color={color} size={20}
                        />
                    ),
                }} />
        </Drawer.Navigator>
    )
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
