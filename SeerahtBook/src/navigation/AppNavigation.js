import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Frontend/Home/Home'
import Download from '../Frontend/Download/Download'
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



const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>


            <Drawer.Navigator initialRouteName="bachonkiNamaz"
            >
                <Drawer.Screen name='bachonkiNamaz' component={Home}
                    options={{
                        headerTitle: "بچیوں کی نماز",
                        headerTitleAlign: "center",
                        title: "Bachon Ki Namaz",
                        drawerIcon: () => (
                            <MaterialIcons name="menu-book" color="#1d5968" size={18}
                            />
                        ),
                    }}

                />
                <Drawer.Screen name='buyNow' component={BuyNow}
                    options={{
                        title: "Buy Now",
                        drawerIcon: () => (
                            <MaterialIcons name="shopping-cart" color="#1d5968" size={18}
                            />
                        ),
                    }}
                />
                <Drawer.Screen name='connectWithSeeraht' component={ConnectWithSeeraht}
                    options={{
                        title: "Connect With Seeraht",
                        drawerIcon: () => (
                            <Octicons name="link" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='aboutSeeraht' component={AboutSeeraht}
                    options={{
                        title: "About Seeraht",
                        drawerIcon: () => (
                            <MaterialIcons name="info" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='download' component={Download}
                    options={{
                        title: "Download",
                        drawerIcon: () => (
                            <MaterialIcons name="menu-book" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='helpSeeraht' component={HelpSeeraht}
                    options={{
                        title: "Help Seeraht",
                        drawerIcon: () => (
                            <FontAwesome5 name="hands-helping" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='moreApps' component={MoreApps}
                    options={{
                        title: "More Apps",
                        drawerIcon: () => (
                            <FontAwesome5Pro name="google-play" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='subscribeForWhatsApp' component={Subscribes}
                    options={{
                        title: "Subscribe For WhatsApp",
                        drawerIcon: () => (
                            <FontAwesome5Pro name="whatsapp" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='share' component={Share}
                    options={{
                        title: "Share",
                        drawerIcon: () => (
                            <FontAwesome5 name="share-alt" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='submitFeedback' component={Feedback}
                    options={{
                        title: "Submit Feedback",
                        drawerIcon: () => (
                            <MaterialIcons name="feedback" color="#1d5968" size={18}
                            />
                        ),
                    }} />
                <Drawer.Screen name='downloadCourse' component={DownloadCourse}
                    options={{
                        title: "Download Course",
                        drawerIcon: () => (
                            <FontAwesome5 name="file-download" color="#1d5968" size={18}
                            />
                        ),
                    }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}