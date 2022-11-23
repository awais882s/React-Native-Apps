import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Pdf from 'react-native-pdf';

export default function AboutSeeraht() {

  const source = require('../../Assest/pdfbook.pdf');
  // const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View>
          <Text style={Styles.button}>Mutfi Mustafa Aziz</Text>
          <View style={Styles.PdfContainer}>
            <Pdf
              singlePage={false}
              trustAllCerts={false}
              horizontal={true}
              source={source}
              style={Styles.pdf} />
          </View>
        </View>
        <View>
          <Text style={Styles.button}>Seeraht Institute & Research Center</Text>
          <ScrollView style={{ flex: 1 }}>
            <View>
              <Text style={Styles.header}>سیرت انسٹی ٹیوٹ 10 نکاتی اہداف</Text>
              <Text style={Styles.urdertext}> 1) سیرۃ النبی ﷺ کو تعلیمی، تدریسی، سیکھنے اور سکھانے کے انداز کو بنیاد بنا کر بستی بستی، قریہ قریہ، محلہ محلہ شہروں اور ملکوں مین عوامی سطح پر سیرۃ کورسزز کا انعقاد کرنا۔</Text>
              <Text style={Styles.urdertext}> 2)ایک روزہ، تین روزہ، دس روزہ، تیس روزہ سیرۃ کورس کا نصاب، کتاب، آڈیو، وڈیو، جغرافیہ اور نقشہ جات کی صورت میں مہیا کرنا۔
              </Text>
              <Text style={Styles.urdertext}> 3)تعلیمی اداروں کے ساتھ ساتھ فیکٹریوں، کارخانوں، بازاروں اور عوامی مقامات پر مصروف احباب کی مصروفیت کا احترام کرتے ہوئے سیرۃ کورس کرانا۔
              </Text>
              <Text style={Styles.urdertext}>4) مدارس کے فضلاء کرام اور جدید تعلیم یافتہ احباب کو (معلم تربیت کورس) کے بعد سیرۃ خدمات کے لئے مواقع فراہم کرنا۔
              </Text>
              <Text style={Styles.urdertext}> 5)سيرۃ نصاب،ختم نبوت نصاب، اہل بیت، امھات المؤمنين، رضی اللہ عنہم، اصحاب رسول ﷺ کی سیرۃ کے ساتھ بچوں کے نبی ﷺ۔۔۔۔۔۔بڑوں کےنبی ﷺ۔۔۔۔۔خواتین کے نبی ﷺ۔۔۔غریبوں کے نبی ﷺ۔۔۔۔۔۔ امیروں کے نبی ﷺ۔۔۔۔۔تاجروںکے نبیﷺ ۔۔۔مزدوروں کےنبی ﷺ۔۔۔۔۔نبیوں کے نبیﷺ
                نبیﷺ کا گھرانہ۔۔۔۔۔۔اور سیرۃ کمپیوٹر کورس شامل ہے۔
              </Text>
              <Text style={Styles.urdertext}>6)بچوں میں سیرۃ کا جذبہ بیدار کرنے کے لئے (سیرۃ مقابلہ جات) نعت مقابلہ، تقریری مقابلہ، کوئز مقابلہ، اسماء النبی ﷺ کا مقابلہ، اور دل چسپ سلسلہ جات شامل ہیں۔
              </Text>
              <Text style={Styles.urdertext}>7)یہ ادارہ دنیا کی بڑی دس زبانوں میں سیرت کورس کا ترجمہ اور ہر ملک اور ہر شہر میں سیرت انسٹی ٹیوٹ کاانعقاد کرنے اور مصروف احباب کی مصروفیت کا لحاظ رکھتے ہوئے اسلامک شارٹ کورسزز کے ذریعے مکمل دینی تعلیم سکھانے کے سفر پر گامزن ہوچکا ہے۔ </Text>
              <Text style={Styles.urdertext}>8)فیصل آباد شہر میں ہر ماہ دس روزہ سیرت کورس پڑھانا اور ہر جمعہ کو عصر کے بعد درودو سلام کے بعد سیرۃ کی مختلف جہات پر تحقیقی باحوالہ، مستند بیان کا نظم ترتیب دے دیا گیا۔
              </Text>
              <Text style={Styles.urdertext}> 9)آپ کے شہر اور ادارے میں معلم ورکشاپ / نصاب کی سہولیات / کورس کامیابی مذاکرہ / فی سبیل اللہ حاصل کرنے کی دعوت ہمیں سعادت مند بنا سکتی ہے۔
              </Text>
              <Text style={Styles.urdertext}> 10)سنہری سلسلہ سیرۃ کے آپ داعی اور معاون بن سکتے ہیں۔ معلم کا نصاب / حوصلہ افزائی / نصاب تربیت / کورس کی تیاری اور علمی سلسلہ جات کے مصروف میں معاونت رسول الله ﷺ کی محبت کی حلاوت اور نجات ذریعہ بن سکتا ہے۔
              </Text>
              <Text style={Styles.footer}>اس چمن کی آبیاری ہم سب کی ذمہ داری
              </Text>
              <Text style={Styles.header}>Seeraht Institute 10 Points Goal
              </Text>
              <Text style={Styles.english}>1) Conducting of courses on the basis of Seeraht ul Nabi in Educational, Learning, teaching and getting knowledge from village to village, street to street, corner to corner, city to city and on national level campaigns and courses.
              </Text>
              <Text style={Styles.english}>2) 1 day, 3 days, 10 days, 30 days courses conduction of Seeraht Course in the form of books, audios, villages, geography and in the form of maps.
              </Text>
              <Text style={Styles.english}>3) Conduction of courses apart from educational institutions, in factories,
                industries, Bazar and National areas keeping in view the busy routine of all.
              </Text>
              <Text style={Styles.english}>4) Providing opportunity to train others after Seeraht Course to the Scholars and modern educated people.
              </Text>
              <Text style={Styles.english}>5) Seeraht Course, Last Prophecy Course, Sahaba Course, Family of Prophet course, Children's Prophet, Prophet of elders, Prophet of Females, Prophet of Poor, Prophet of Rich, Prophet of Traders, Prophet of Laboure’s, Prophet of family of Beloved Prophet and Seeraht Course is included.
              </Text>
              <Text style={Styles.english}>6) To uplift the passion of Seeraht ul Nabi organizing Naat contest, Speech contest, Quiz contest, Asmaa ul Husna Contest and Interesting things.
              </Text>
              <Text style={Styles.english}>7) This institute is on the way to promote Islamic knowledge through different short courses, organizing Seeraht institute in different cities and countries and also translation of courses in 10 big languages.
              </Text>
              <Text style={Styles.english}>8) In Faisalabad city, every month organization of 10 day Seeraht courses teaching and on every Friday, after Asar praying of Darood o Salam and different research authentic based references are sequenced.
              </Text>
              <Text style={Styles.english}>9) In your city and institute, organization of workshops, providing of courses, conversation of courses success and facility of courses in the way of Almighty can make us honored.
              </Text>
              <Text style={Styles.english}>10) In the way of Golden series of Seeraht, we can be your supporter and companions. Being indulged in teaching courses, appreciation courses, courses of training, preparation of courses and educational courses may be a source of our protection in eternal life.
              </Text>
              <Text style={Styles.footer}>To water this land is responsibility of us.</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#F0E4E4E9",
    fontSize: 15,
    color: "#000000",
    padding: 5,
    paddingLeft: 20
  },
  header: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
    marginVertical: 10,
    borderBottomColor: "#2726268B",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  urdertext: {
    borderBottomColor: "#2726264A",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    textAlign: "right",
    marginVertical: 10,
    color: "#000000",
    fontSize: 15,
    marginHorizontal: 7,
  },
  english: {
    borderBottomColor: "#2726264A",
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginVertical: 10,
    color: "#000000",
    textAlign: "left",
    fontSize: 15,
    marginHorizontal: 7,
  },
  PdfContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})
