import { View, Text,Image,Pressable, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
const Srcdetails = ({ route, navigation }) => {
    const { list,cityy,country,list2,apidetails } = route.params;
    console.log(apidetails.forecastday[0].day.condition.icon)
    
      
    const DATA = [
        {
            time: list2[0].time,
            temp: list2[0].temp,

        },
        {
            time: list2[1].time,
            temp: list2[1].temp,
        },
        {
            time: list2[2].time,
            temp: list2[2].temp,
        },
        {
            time: list2[3].time,
            temp: list2[3].temp,
        },
        {
            time: list2[4].time,
            temp: list2[4].temp,
        },
       
        
    ]
    const Data3=[
        {
            data: moment(apidetails.forecastday[1].hour[1].time).format('dddd'),
            Image: apidetails.forecastday[1].day.condition.icon,
            temp: apidetails.forecastday[2].day.avgtemp_c,
                dec: apidetails.forecastday[1].day.mintemp_c,
            inc: apidetails.forecastday[1].day.maxtemp_c
        },
        {
            data: moment(apidetails.forecastday[2].hour[1].time).format('dddd'),
            Image: apidetails.forecastday[2].day.condition.icon,
            temp: apidetails.forecastday[2].day.avgtemp_c,
            dec: apidetails.forecastday[2].day.mintemp_c,
            inc: apidetails.forecastday[2].day.maxtemp_c
        },
        {
            data: moment(apidetails.forecastday[3].hour[1].time).format('dddd'),
            Image: apidetails.forecastday[3].day.condition.icon,
            temp: apidetails.forecastday[3].day.avgtemp_c,
            dec: apidetails.forecastday[3].day.mintemp_c,
            inc: apidetails.forecastday[3].day.maxtemp_c
        }
    ]
    const Data2 = [
        {
            data: 'Sunrise',
            values: list[0].values,
            id: 1
        },
        {
            data: "wind",
            values: list[1].values,
            id: 2

        },
        {
            data: "Precipitation",
            values: list[2].values,
            id: 3
        },
        {
            data: 'Sunset',
            values: list[3].values,
            id: 4
        },
        {
            data: "Pressure",
            values: list[4].values,
            id: 5

        },
        {
            data: "Humidity",
            values: list[5].values,
            id: 6
        }
    ]
  return (
      <View style={styles.mainDiv}>
          
          <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{ width: '100%', backgroundColor: '#37C0F7' }}>
              <Image source={require('../Images/arrow.png')}
                  style={{
                      height: 20,
                      width: 20,
                      alignSelf: 'center',
                      margin: 20,
                      tintColor: 'white',
                      backgroundColor: '#37C0F7'
                  }} />
          </TouchableOpacity>
          <>
          
          <Text style={styles.div2txt}>{cityy}</Text>
          <Text style={styles.div2txt2}>{country}</Text>
          <View>
              <FlatList
                  horizontal
                  data={DATA}

                  renderItem={({ item }) =>

                      <View style={{ borderBottomWidth: 2, borderColor: '#ccc', paddingBottom: 10, paddingTop: 10,borderTopWidth:1,marginTop:20, }}>
                          <Text style={styles.flatliststle}>{item.time}</Text>
                          <Text style={styles.flatliststle6}>{item.temp}&deg;</Text>
                      </View>
                  }

              />
          </View>
          <View>
              <FlatList
               
                  data={Data3}

                  renderItem={({ item }) =>

                      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                          <Text style={styles.flatliststle}>{item.data}</Text>
                          <Image style={styles.flatliststle2}source={{uri:`http:${item.Image}` } }/>
                          <Text style={styles.flatliststle}>{item.temp}&deg;</Text>
                          <Text style={styles.flatliststle}><Image source={require('../Images/arrow.png')}
                              style={{
                                  height: 20,
                                  width: 20,
                                  alignSelf: 'center',
                                  margin: 20,
                                  tintColor: 'white',
                                  backgroundColor: '#37C0F7'
                              }} />{item.dec}&deg;</Text>
                          <Text style={styles.flatliststle}><Image source={require('../Images/up-arrows.png')}
                              style={{
                                  height: 20,
                                  width: 20,
                                  alignSelf: 'center',
                                  margin: 20,
                                  tintColor: 'white',
                                  backgroundColor: '#37C0F7'
                              }} />{item.inc}&deg;</Text>
                      </View>
                  }

              />
          </View>
          <View style={{ borderColor: '#ccc', paddingBottom: 10, paddingTop: 10, borderTopWidth: 1, marginTop: 20 }}>
              <FlatList

                  data={Data2}
                  numColumns={3}
                  renderItem={({ item }) =>

                      <View >
                          <Text style={styles.flatliststle3}>{item.data}</Text>
                          <Text style={styles.flatliststle4}>{item.values}</Text>
                      </View>
                  }

              />
              

          </View>
          </>
    </View>
  )
}
const styles=StyleSheet.create({
    mainDiv: {
        padding: 5,
        backgroundColor: '#37C0F7',
        height: '100%'
    },
    div2txt: {
        
        textAlign: 'center',
        color: 'white',
        fontSize:30
    },
    div2txt2: {
       marginTop: 10,
        textAlign: 'center',
        color: '#cEE',
       fontSize: 20
    },
    flatliststle: {
        color: '#eee',
        margin: 10,
        fontSize: 15,
    },
    flatliststle6:{
        color: 'white',
        margin: 10,
        marginTop:5,
        fontSize: 20,
    },
    flatliststle2: {
        color: 'white',
       width:30,
       height:30,
        margin: 10,

    },
    flatliststle3: {
        color: '#ccc',
        margin: 10,
        fontSize: 18,
        marginTop:20,
    },
    flatliststle4: {
        color: 'white',
        fontSize: 22,
        margin: 10,

    }
})
export default Srcdetails