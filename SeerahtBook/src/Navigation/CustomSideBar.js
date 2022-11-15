// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  // StyleSheet,
  Image,
  ImageBackground,
  Text,
} from 'react-native';


const CustomSidebarMenu = (props) => {

  return (

    <View style={{ flex: 1 }}>
      {/*Top Large Image */}
      {/* <Image
        source={{ uri: "https://res.cloudinary.com/seeraht/image/upload/v1668494789/public/Seeraht-01_y6jxqv.png" }}
        style={styles.sideMenuProfileIcon}
      /> */}


      <DrawerContentScrollView {...props} >
        <ImageBackground>
          <Image source={{ uri: "https://res.cloudinary.com/seeraht/image/upload/v1668494789/public/Seeraht-01_y6jxqv.png" }} style={{ height: 130, resizeMode: "contain" }}>

          </Image>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   sideMenuProfileIcon: {
//     resizeMode: 'center',
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//     alignSelf: 'center',
//   },
//   iconStyle: {
//     width: 15,
//     height: 15,
//     marginHorizontal: 5,
//   },
//   customItem: {
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

export default CustomSidebarMenu;
