import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-paper'
import Top from '../../Assest/11111.png'

export default function Home() {
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
        <View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>فہرست مضامین</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 1 - ایمان مجمل
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 2 - ایمان مفصل
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 3 - اول کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 4 - دوم کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 5 - سوم کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 6 - چہارم کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 7 - پنجم کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 8 - ششم کلمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 9 - غسل
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 10 - وضو سے پہلے کی دعا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 11 - وضو کرنے کا طریقہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 12 - ہاتھوں کا دھونا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 13 - کلی کرنا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 14 - ناک صاف کرنا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 15 - چہرہ دھونا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 16 - وضو کے درمیان کی دعا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 17 - بازو دھونا

              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 18 - مسح کرنا
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 19 - پاؤں دھونا</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 20 - وضو کے اہم نکات</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 21 - وضو توڑنے والی چیزیں
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 22 - وضو کے
                فرائض
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 23 - نماز کے شرطیں
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 24 - نماز کے فرائض
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 25 - رکعات کی تفصیل
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 26 - مکمل نماز نیت
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 27 - تکبیر تحریمہ
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 28 - قیام
              </Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 29 - تعوذ،تسمیہ</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 30 - سورۃ الفاتحہ
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 31 - قرات
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 32 - رکوع
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 33 - قومہ</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 34 - سجدہ
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 35 - جلسہ
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 36 - قعدہ-تشہد</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 37 - درودابراھیمی 
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 38 - دعا 
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 39 - سلام
</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 40 - سجدہ سھو</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>سبق نمبر- 41 - نفلی نمازوں کا فاںدہ</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
          <View>
            <Button
              onPress={() => alert("Working")}
              style={styles.button}
            >
              <Text style={styles.textbutton}>First Lesson</Text>
            </Button>
          </View>
        </View>
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