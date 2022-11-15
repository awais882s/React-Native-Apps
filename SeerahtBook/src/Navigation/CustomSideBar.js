import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';
const CustomSidebarMenu = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <ImageBackground>
          <Image source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668507787/Seeraht/Seerahtlogo_1_pglubl.jpg" }} style={{ height: 130, resizeMode: "contain", }}>

          </Image>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomSidebarMenu;
