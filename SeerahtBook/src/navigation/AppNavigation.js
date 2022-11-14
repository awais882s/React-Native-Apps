import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../Frontend/Home/Home'
import Download from '../Frontend/Download/Download'
import Feedback from '../Frontend/Feedback/Feedback'
import HelpUs from '../Frontend/HelpUs/HelpUs'
import MoreApp from '../Frontend/MoreApps/MoreApp'
import Shared from '../Frontend/Shared/Shared'
import BuyNow from '../Frontend/buyNow/BuyNow'
import Subscribes from '../Frontend/Subscribes/Subscribes'
import ContactUs from '../Frontend/ContactUs/ContactUs'
import AboutUs from '../Frontend/AboutUs/AboutUs'

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} options={{
                    title: "بچیوں کی نماز"
                }} />
                <Drawer.Screen name='AboutUs' component={AboutUs} />
                <Drawer.Screen name='BuyNow' component={BuyNow} />
                <Drawer.Screen name='Download' component={Download} />
                <Drawer.Screen name='Feedback' component={Feedback} />
                <Drawer.Screen name='HelpUs' component={HelpUs} />
                <Drawer.Screen name='MoreApp' component={MoreApp} />
                <Drawer.Screen name='Shared' component={Shared} />
                <Drawer.Screen name='Subscribes' component={Subscribes} />
                <Drawer.Screen name='ContactUs' component={ContactUs} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}