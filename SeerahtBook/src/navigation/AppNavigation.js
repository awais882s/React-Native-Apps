import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../frontend/Home/Home'
import Aboutus from '../frontend/Aboutus/Aboutus'
import Contactus from '../frontend/Contactus/Contactus'
import Download from '../frontend/Download/Download'
import Feedback from '../frontend/Feedback/Feedback'
import Helpus from '../frontend/Helpus/Helpus'
import Moreapp from '../frontend/Moreapp/Moreapp'
import Shared from '../frontend/Shared/Shared'
import BuyNow from '../frontend/buyNow/BuyNow'
import Subcribed from '../frontend/Subcribe/Subcribed'

const Drawer = createDrawerNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name='Aboutus' component={Aboutus} />
                <Drawer.Screen name='BuyNow' component={BuyNow} />
                <Drawer.Screen name='Contactus' component={Contactus} />
                <Drawer.Screen name='Download' component={Download} />
                <Drawer.Screen name='Feedback' component={Feedback} />
                <Drawer.Screen name='Helpus' component={Helpus} />
                <Drawer.Screen name='Moreapp' component={Moreapp} />
                <Drawer.Screen name='Shared' component={Shared} />
                <Drawer.Screen name='Subcribed' component={Subcribed} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}