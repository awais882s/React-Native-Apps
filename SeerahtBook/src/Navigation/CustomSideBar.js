import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, Image, ImageBackground, Linking, Share, } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Share At Any Social Media 
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        `Seeraht سیرۃ | Let's read Bachon ki Namaz Course book written by Mufti Mustafa Aziz; https://play.google.com/store/apps/details?id=com.seeraht.khatm_e_nabuwwat_course`
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
const CustomSidebarMenu = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <ImageBackground>
          <Image source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668507787/Seeraht/Seerahtlogo_1_pglubl.jpg" }} style={{ height: 140, resizeMode: 'cover', }} >
          </Image>
        </ImageBackground>
        <View style={{ borderBottomWidth: 1, borderColor: "#bdbdbd", marginVertical: 7 }}></View>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={(color) => (
            <FontAwesome5 name="share-alt" color={color} size={20}
            />
          )}
          label="Share"
          onPress={onShare}
        />
        <DrawerItem
          icon={(color) => (
            <MaterialIcons name="feedback" color={color} size={20}
            />
          )}
          label="Submit Feedback"
          onPress={() => { Linking.openURL("https://play.google.com/store/apps/details?id=com.seeraht.khatm_e_nabuwwat_course") }}
        />
        <DrawerItem
          icon={(color) => (
            <FontAwesome5 name="file-download" color={color} size={20}
            />
          )}
          label="Download Course"
          onPress={() => Linking.openURL('https://drive.google.com/file/d/1tXYDzHuwdCYRUXw1uNToXxTKk9GJZo_v/view?usp=sharing')}
        />
      </DrawerContentScrollView>

    </View >
  );
};
export default CustomSidebarMenu;
