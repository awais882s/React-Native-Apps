import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Frontend/Home/Home'
import Feedback from '../Frontend/Feedback/Feedback'
import MoreApps from '../Frontend/MoreApps/MoreApps'
import Share from '../Frontend/Share/Share'
import BuyNow from '../Frontend/buyNow/BuyNow'
import Subscribes from '../Frontend/Subscribes/Subscribes'
import DownloadCourse from '../Frontend/DownloadCourse/DownloadCourse'
import ConnectWithSeeraht from '../Frontend/ConnectWithSeeraht/ConnectWithSeeraht'
import AboutSeeraht from '../Frontend/AboutSeeraht/AboutUs'
import HelpSeeraht from '../Frontend/HelpSeeraht/HelpSeeraht'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import CustomSidebarMenu from "./CustomSideBar";

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
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
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ color }) => (
                            <MaterialIcons name="shopping-cart" color={color} size={20}
                            />
                        ),
                    }}
                />
                <Drawer.Screen name='ConnectWithSeeraht' component={ConnectWithSeeraht}
                    options={{
                        headerTitle:"Digitial Seeraht",
                        title: "Connect With Seeraht",
                        headerStyle: {
                            backgroundColor: "#9e1f63"
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: 'bold',
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
                            fontWeight: 'bold',
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
                            fontWeight: 'bold',
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
                            fontWeight: 'bold',
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
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ color }) => (
                            <FontAwesome5Pro name="whatsapp" color={color} size={20}
                            />
                        ),
                    }} />
                <Drawer.Screen name='Share' component={Share}

                    options={{
                        title: "Share",
                        headerStyle: {
                            backgroundColor: "#9e1f63"
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ color }) => (
                            <FontAwesome5 name="share-alt" color={color} size={20}
                            />
                        ),


                    }}

                />
                <Drawer.Screen name='Feedback' component={Feedback}
                    options={{
                        title: "Submit Feedback",
                        headerStyle: {
                            backgroundColor: "#9e1f63"
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ color }) => (
                            <MaterialIcons name="feedback" color={color} size={20}
                            />
                        ),
                    
                    }} 
                
                    />
                <Drawer.Screen name='DownloadCourse' component={DownloadCourse}
                    options={{
                        title: "Download Course",
                        headerStyle: {
                            backgroundColor: "#9e1f63"
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerIcon: ({ color }) => (
                            <FontAwesome5 name="file-download" color={color} size={20}
                            />
                        ),
                    }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}