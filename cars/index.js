import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [

 {
 id: '3',
 title: 'La Tierra',
 src:require('./src/imgs/tierra.jpg'),
 },
 {
 id: '4',
 title: 'Estacion espacial internacional',
 src:require('./src/imgs/estacion.jpg'),
 },
 {
 id: '5',
 title: 'Luna',
 src:require('./src/imgs/luna.jpg'),
 },

   {
      id: '7',
      title: 'Ceres',
      src:require('./src/imgs/ceres.jpg'),
      },
      {
         id: '8',
         title: 'lo',
         src:require('./src/imgs/io.jpg'),
         },
         {
            id: '9',
            title: 'Europa',
            src:require('./src/imgs/europa.jpg'),
            },
 ];
 const Item = ({ title, img }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Image style={styles.img} source={img}/>
 </View>
 );
 
 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src} />
 );
 
 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }
 
 const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 alignItems: 'center'
 },
 title: {
 fontSize: 32,
 },
 img:{
    width:200,
    height:125,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode: 'contain',
    margin:8
 }
 });
AppRegistry.registerComponent("cars", () => App);
