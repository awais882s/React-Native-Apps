import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  View,
  Image,
  ImageBackground,
  Linking,
  Share,
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";








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
          <Image source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668507787/Seeraht/Seerahtlogo_1_pglubl.jpg" }} style={{ height: 130, resizeMode: "contain", }}>

          </Image>

        </ImageBackground>
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
          onPress={() => Linking.openURL('https://firebasestorage.googleapis.com/v0/b/khatm-e-nabuwwat.appspot.com/o/Documents%2FBook%2FKhatm-e-Nabuwwat%20Course%20-%20Complete.pdf?alt=media&token=82f32628-e046-481d-bb50-24c6eb60b32f')}
        />
      </DrawerContentScrollView>

    </View>
  );
};
export default CustomSidebarMenu;
