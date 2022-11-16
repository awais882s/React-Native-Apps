import * as React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const MyComponent = () => (

  <View>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Card style={{ width: "45%", marginRight: 10, marginLeft: 10 }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Text style={{ textAlign: "center" }}>Link</Text>
      </Card>
      <Card style={{ width: "45%",  marginRight: 10 }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Text style={{ textAlign: "center" }}>Link</Text>
      </Card>
    </View>
  </View>

);

export default MyComponent;