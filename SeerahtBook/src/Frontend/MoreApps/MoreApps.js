import * as React from 'react';
import { Alert, Image, Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import { Card, } from 'react-native-paper';
import Book from "../../Assest/Books/1.jpg"
import Book1 from "../../Assest/Books/2.jpeg"
import Book3 from "../../Assest/Books/3.jpeg"
import Book4 from "../../Assest/Books/4.jpeg"
import Book5 from "../../Assest/Books/5.jpeg"
import Book6 from "../../Assest/Books/6.jpeg"
import Book7 from "../../Assest/Books/7.jpeg"
import Book8 from "../../Assest/Books/8.jpeg"
import Book9 from "../../Assest/Books/9.jpeg"
import Book10 from "../../Assest/Books/10.jpeg"
import Book11 from "../../Assest/Books/11.jpeg"
import Book12 from "../../Assest/Books/3.jpeg"



export default MyComponent = () => {
  const createButtonAlert = () => {
    Alert.alert(
      "App is Under Development",
      "Developers are working on this app.It will be available on Google Play Store soon.ان شاءاللہ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  return (
    <>
      <ScrollView>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book} />
              <View>
                <TouchableOpacity onPress={() => { Linking.openURL("https://play.google.com/store/apps/details?id=com.seeraht") }}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book11} />
              <View>
                <TouchableOpacity onPress={() => { Linking.openURL("https://play.google.com/store/apps/details?id=com.seeraht.khatm_e_nabuwwat_course") }}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
          </View>
        </View>
        {/* another div or view */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book3} />
              <View>
                <TouchableOpacity onPress={createButtonAlert}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
            <Card style={{ width: "45%", marginTop: 10 }}>
              <Card.Cover source={Book4} />
              <TouchableOpacity onPress={createButtonAlert}>
                <Image style={{ height: 50, borderRadius: 0 }} source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668601942/Seeraht/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo_lh2qlv.png" }}></Image>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
        {/* another div or view */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book5} />
              <View>
                <TouchableOpacity onPress={createButtonAlert}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
            <Card style={{ width: "45%", marginTop: 10 }}>
              <Card.Cover source={Book6} />
              <TouchableOpacity onPress={createButtonAlert}>
                <Image style={{ height: 50, borderRadius: 0 }} source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668601942/Seeraht/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo_lh2qlv.png" }}></Image>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
        {/* another div or view */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book7} />
              <View>
                <TouchableOpacity onPress={createButtonAlert}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
            <Card style={{ width: "45%", marginTop: 10 }}>
              <Card.Cover source={Book8} />
              <TouchableOpacity onPress={createButtonAlert}>
                <Image style={{ height: 50, borderRadius: 0 }} source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668601942/Seeraht/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo_lh2qlv.png" }}></Image>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
        {/* another div or view */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book9} />
              <View>
                <TouchableOpacity onPress={createButtonAlert}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>
              </View>
            </Card>
            <Card style={{ width: "45%", marginTop: 10 }}>
              <Card.Cover source={Book10} />
              <TouchableOpacity onPress={createButtonAlert}>
                <Image style={{ height: 50, borderRadius: 0 }} source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668601942/Seeraht/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo_lh2qlv.png" }}></Image>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
        {/* another div or view */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Card style={{ width: "45%", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
              <Card.Cover source={Book11} />
              <View>
                <TouchableOpacity onPress={createButtonAlert}>
                  <Image style={{ height: 50 }} source={{ uri: "https://e7.pngegg.com/pngimages/918/845/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo.png" }}></Image>
                </TouchableOpacity>

              </View>
            </Card>
            <Card style={{ width: "45%", marginTop: 10 }}>
              <Card.Cover source={Book12} />
              <TouchableOpacity onPress={createButtonAlert}>
                <Image style={{ height: 50, borderRadius: 0 }} source={{ uri: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1668601942/Seeraht/png-clipart-google-play-logo-google-play-app-store-android-google-play-text-logo_lh2qlv.png" }}></Image>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </ScrollView>
    </>
  );
}