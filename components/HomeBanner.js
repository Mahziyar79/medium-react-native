import React, {useRef} from 'react';
import {StyleSheet ,View, FlatList, Dimensions, TouchableOpacity, Animated, Image, Text} from 'react-native';
import {dataArray} from '../config/DATA';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.4;

const HomeBanner = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return(
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={dataArray}
                keyExtractor={item => item.id}
                onScroll={Animated.event([{nativeEvent : {contentOffset : {x : scrollX}}}], {useNativeDriver : false})}
                renderItem={({item, index}) => {
                    const inputRange = [
                        (index - 1) * width,
                        (index * width),
                        (index + 1) * width
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange : [-width * 0.7, 0, width * 0.7]
                    })
                    return(
                        <View style={{width, justifyContent : 'center', alignItems : 'center'}}>
                            <TouchableOpacity
                                activeScale={0.9}
                                tension={50}
                                friction={7}
                                useNativeDriver
                            >
                                <View style={{ width : ITEM_WIDTH, height : ITEM_HEIGHT, overflow : 'hidden', alignItems : 'center', borderRadius : 14}}>
                                    <Animated.Image style={{width : ITEM_WIDTH * 1.4, height : ITEM_HEIGHT, resizeMode : 'cover' ,transform : [{translateX}]}} source={item.url} />
                                    <View style={styles.DarkOverly}></View>
                                    <View style={{flexDirection : 'column', position : 'absolute', bottom : 10, marginLeft : 15}}>
                                        <Text style={styles.headerCoverText}>{item.title}</Text>
                                        <View style={{flexDirection : 'row', marginTop : 5}}>
                                            <View style={{flexDirection : 'row', alignItems : 'center'}}>
                                                <Ionicons name="time-outline" size={14} color="#fff" style={{opacity : 0.5}}/>
                                                <Text style={styles.headerCoverItem}>50m ago</Text>
                                            </View>
                                            <View style={{flexDirection : 'row', alignItems : 'center', marginLeft : 30}}>
                                                <MaterialCommunityIcons name="message-text-outline" size={13} color="#fff" style={{opacity : 0.5}}/>
                                                <Text style={styles.headerCoverItem}>68 comments</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}

            />
        </View>

    )
}

const styles = StyleSheet.create({
    DarkOverly : {
        position : 'absolute',
        width : ITEM_WIDTH * 1.4, 
        height : ITEM_HEIGHT , 
        borderRadius : 20, 
        marginRight : 20,
        backgroundColor : '#000',
        opacity : 0.3
    },

    headerCoverText : {
        fontWeight : 'bold',
        fontSize : 20,
        marginTop : 20,
        color : '#fff'
    },

    headerCoverItem : {
        opacity : 0.9,
        fontSize : 12,
        marginLeft : 3,
        color : '#fff'
    }
})

export {HomeBanner};