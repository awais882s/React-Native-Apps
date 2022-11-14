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

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Bachon ki Namaz' component={Home} />
                <Drawer.Screen name='Buy Now' component={BuyNow} />
                <Drawer.Screen name='Connect With Seeraht' component={ConnectWithSeeraht} />
                <Drawer.Screen name='About Seeraht' component={AboutSeeraht} />
                <Drawer.Screen name='Download' component={Download} />
                <Drawer.Screen name='Help Seeraht' component={HelpSeeraht} />
                <Drawer.Screen name='More Apps' component={MoreApps} />
                <Drawer.Screen name='Subscribe For WhatsApp' component={Subscribes} />
                <Drawer.Screen name='Share' component={Share} />
                <Drawer.Screen name='Submit Feedback' component={Feedback} />
                <Drawer.Screen name='Download Course' component={DownloadCourse} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}