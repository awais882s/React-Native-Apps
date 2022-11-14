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


            <Drawer.Navigator initialRouteName="bachonkiNamaz"
            >
                <Drawer.Screen name='bachonkiNamaz' component={Home}

                    options={{
                        headerTitle: "بچیوں کی نماز",
                        headerTitleAlign: "center",
                        title: "Bachon Ki Namaz",
                    }}

                />
                <Drawer.Screen name='buyNow' component={BuyNow}
                    options={{
                        title: "Buy Now",
                    }}
                />
                <Drawer.Screen name='connectWithSeeraht' component={ConnectWithSeeraht}
                    options={{
                        title: "Connect With Seeraht",
                    }} />
                <Drawer.Screen name='aboutSeeraht' component={AboutSeeraht}
                    options={{
                        title: "About Seeraht",
                    }} />
                <Drawer.Screen name='download' component={Download}
                    options={{
                        title: "Download",
                    }} />
                <Drawer.Screen name='helpSeeraht' component={HelpSeeraht}
                    options={{
                        title: "Help Seeraht",
                    }} />
                <Drawer.Screen name='moreApps' component={MoreApps}
                    options={{
                        title: "More Apps",
                    }} />
                <Drawer.Screen name='subscribeForWhatsApp' component={Subscribes}
                    options={{
                        title: "Subscribe For WhatsApp",
                    }} />
                <Drawer.Screen name='share' component={Share}
                    options={{
                        title: "Share",
                    }} />
                <Drawer.Screen name='submitFeedback' component={Feedback}
                    options={{
                        title: "Submit Feedback",
                    }} />
                <Drawer.Screen name='downloadCourse' component={DownloadCourse}
                    options={{
                        title: "Download Course",
                    }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}