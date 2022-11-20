import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-paper'
import Top from '../../Assest/11111.png'
import { useAuthContext } from '../../Context/Context'
import { MyButton } from "../../global/Data"
import Lesson1 from '../Book/Lesson1'

export default function Home({ navigation }) {
  const { setPageInfo } = useAuthContext()
  return (
    <>
      <View style={{
        backgroundColor: "#DAD2D2"
      }}>
        <Image
          source={Top}
          style={{
            width: 350,
            height: 50,
            marginVertical: 20,
            marginHorizontal: 20
          }}
        />
      </View>
      <ScrollView style={styles.Container}>
        {
          MyButton.map(item => (
            <View key={item.id}>
              <Button
                onPress={() => { navigation.navigate('Lesson1'); setPageInfo({ title: item.title, pageNo: item.page }); console.log(item.page); }}
                style={styles.button}
              >
                <Text style={styles.textbutton}>{item.title}</Text>
              </Button>
            </View>
          ))
        }

        {/* {
            restaurantsData.map(item => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  image={item.image}
                  restaurantName={item.restaurantName}
                  farAway={item.forAway}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  businessAddress={item.businessAddress}
                />
              </View>
            ))
          } */}

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#DAD2D2"
  },
  button: {
    borderColor: "#9e1f63",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 5
  },
  textbutton: {
    color: "#9e1f63"
  }
})