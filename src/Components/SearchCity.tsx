import { View, Text, TextInput, Button, Image, FlatList, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Srcdetails from './Srcdetails'
import debounce from 'lodash.debounce';
import axios from 'axios';
import moment from 'moment'

const SearchCity = ({ navigation }) => {
    const [modalVisible, setmodalVisible] = useState(false)



    const [data, setdata] = useState([]);
    const [city, setcity] = useState([]);
    const [cntry, setcntry] = useState('');
    const [apidata, setapidata] = useState([]);
    const [dat, setdate] = useState([])
    const [temp, settemp] = useState([])
    const changeText = debounce(text => {
setmodalVisible(true)
        axios
            .get(
                `http://api.weatherapi.com/v1/forecast.json?key=92beb83defa34285b6b112019230506&q=${text}&days=7&aqi=yes&alerts=no`,
            )
            .then(res => {
                setapidata(res.data.forecast);
                setcity(res.data.location.name);
                setcntry(res.data.location.country);
                setdate(res.data.location.localtime);
                settemp(res.data.current.temp_c);
                setdata({
                    ...data,
                    maxtemp: res.data.forecast.forecastday[0].day.maxtemp_c,
                    mintemp: res.data.forecast.forecastday[0].day.mintemp_c,
                    condition: res.data.forecast.forecastday[0].day.condition.text,
                    images: res.data.forecast.forecastday[0].day.condition.icon,
                    sunrise: res.data.forecast.forecastday[0].astro.sunrise,
                    sunset: res.data.forecast.forecastday[0].astro.sunset,
                    wind: res.data.current.wind_kph,
                    precipmm: res.data.current.precip_mm,
                    pressure_mb: res.data.current.pressure_mb,
                    humidity: res.data.current.humidity,
                    hour12: res.data.forecast.forecastday[0].hour[12].time,
                    hour1: res.data.forecast.forecastday[0].hour[1].time,
                    hour2: res.data.forecast.forecastday[0].hour[2].time,
                    hour3: res.data.forecast.forecastday[0].hour[3].time,
                    hour4: res.data.forecast.forecastday[0].hour[4].time,
                    hou12: res.data.forecast.forecastday[0].hour[12].temp_c,
                    hou1: res.data.forecast.forecastday[0].hour[1].temp_c,
                    hou2: res.data.forecast.forecastday[0].hour[2].temp_c,
                    hou3: res.data.forecast.forecastday[0].hour[3].temp_c,
                    hou4: res.data.forecast.forecastday[0].hour[4].temp_c,


                })
            });
    }, 500);

    const Searchdata = (Text) => {
        changeText(Text)
    }
    const DATA = [
        {
            time: moment(data.hour12).format('LT'),
            temp: data.hou12,

        },
        {
            time: moment(data.hour1).format('LT'),
            temp: data.hou1
        },
        {
            time: moment(data.hour2).format('LT'),
            temp: data.hou2
        },
        {
            time: moment(data.hour3).format('LT'),
            temp: data.hou3
        },
        {
            time: moment(data.hour4).format('LT'),
            temp: data.hou4
        },

    ]
    const Data2 = [
        {
            data: 'Sunrise',
            values: data.sunrise,
            id: 1
        },
        {
            data: "wind",
            values: data.wind,
            id: 2

        },
        {
            data: "Precipitation",
            values: data.precipmm,
            id: 3
        },
        {
            data: 'Sunset',
            values: data.sunset,
            id: 4
        },
        {
            data: "Pressure",
            values: data.pressure_mb + 'MB',
            id: 5

        },
        {
            data: "Humidity",
            values: data.humidity + '%',
            id: 6
        }
    ]

    return (
        <>
            <View style={styles.mainDiv}>
                <View style={styles.div1}>
                    <TextInput
                        placeholder='Search City'
                        style={styles.txtinput}
                        placeholderTextColor="#fff"
                        //value={city}
                        //onChangeText={(e)=>debouncedChangeHandler(e)} 
                        onChangeText={text => Searchdata(text)}
                    />
                    <TouchableOpacity >
                        <Text style={styles.btnclr}>&deg;C</Text>
                    </TouchableOpacity>


                </View>
                <View></View>
                {  modalVisible?(
                    
 <>
                    <View style={styles.div2}>
                        <Text style={styles.div2txt}>
                            {
                                moment(dat).format('dddd') + '' + moment(dat).format('MMMM') + moment(dat).format('D')


                            }

                        </Text>
                        <Text style={styles.div2txt2}>{city}</Text>
                        <Text style={styles.div2txt}>{cntry}</Text>
                    </View>
                    <View style={styles.div3}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text style={styles.div3txt}>{temp}&deg;</Text>
                            <Text style={{ paddingLeft: 30, color: '#ccc', fontSize: 15 }}>Feels like {temp}&deg;</Text>

                            <Text style={{ paddingLeft: 20, color: '#fff', fontSize: 20 }}> <Image source={require('../Images/arrow.png')}
                                style={{
                                    height: 20,
                                    width: 20,
                                    alignSelf: 'center',
                                    margin: 20,
                                    tintColor: 'white',
                                    backgroundColor: '#37C0F7'
                                }} />{data.mintemp}&deg;&nbsp;&nbsp;&nbsp;<Image source={require('../Images/up-arrows.png')}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        alignSelf: 'center',
                                        margin: 20,
                                        tintColor: 'white',
                                        backgroundColor: '#37C0F7'
                                    }} />{data.maxtemp}&deg;</Text>
                        </View>
                        <Image source={{ uri: `http:${data.images}` }} style={styles.div3img}></Image>
                    </View>
                    <View style={styles.div4}>
                        <Text style={styles.div4txt1}>{data.condition}</Text>
                    </View>
                    <View>
                        <FlatList
                            horizontal
                            data={DATA}

                            renderItem={({ item }) => <View style={{ borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10, paddingTop: 10 }}>
                                <Text style={styles.flatliststle}>{item.time}</Text>
                                <Text style={styles.flatliststle2}>{item.temp}&deg;</Text>
                            </View>} />
                    </View>
                    <View>
                        <FlatList

                            data={Data2}
                            numColumns={3}
                            renderItem={({ item }) => <View>
                                <Text style={styles.flatliststle}>{item.data}</Text>
                                <Text style={styles.flatliststle2}>{item.values}</Text>
                            </View>} />
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Srcdetails',
                                {
                                    list: Data2,
                                    cityy: city,
                                    country: cntry,
                                    list2: DATA,
                                    apidetails: apidata,
                                })
                        }}>
                            <Image source={require('../Images/up-arrows.png')}

                                style={{
                                    height: 20, width: 20, alignSelf: 'center',
                                    justifyContent: 'flex-end', tintColor: 'white'
                                }} />
                        </TouchableOpacity>

                    </View>
                    <View>

                    </View>
                </>
                    ):''
                
                            }
               

            </View>
        </>

    )
}
const styles = StyleSheet.create({
    mainDiv: {
        padding: 10,
        backgroundColor: '#37C0F7',
        height: '100%'
    },
    txtinput: {
        borderWidth: 1,
        borderRadius: 30,
        width: '90%',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#83DCFA',
        borderColor: '#83DCFA',
        color: 'white',
        marginTop: 2,
        marginBottom: 10
    },
    div1: {
        display: 'flex',
        flexDirection: 'row'
    },
    div3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btnclr: {
        color: 'white',
        alignSelf: 'center',
        padding: 5,
        fontSize: 20
    },
    div2txt: {
        marginTop: 10,
        textAlign: 'center',
        color: 'white'
    },
    div2txt2: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22
    },
    div4txt1: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        padding: 20,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    div3txt: {
        marginTop: 10,
        textAlign: 'center',
        color: 'white',
        paddingLeft: 10,
        fontSize: 60
    },
    div3img: {
        width: 100,
        height: 100,

    },
    flatliststle: {
        color: '#ccc',
        margin: 10,
        fontSize: 18,
    },
    flatliststle2: {
        color: 'white',
        fontSize: 22,
        margin: 10,

    }
})
export default SearchCity