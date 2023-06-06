import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MainPage = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <View style={{
                  height: '80%', justifyContent: 'flex-end',

                  alignItems: 'center'
              }}>

                  <Image source={require('../Images/cloudy.png')}
                      style={{
                          width: 150, height: 150,


                      }} />
              </View>
        </TouchableOpacity>
      
    <View>
              <Image source={require('../Images/wheater.png')}
                  style={{ width: 150, height: 150, alignSelf: 'center' }}/>
                  
                   </View>
      </View>
  )
}

export default MainPage