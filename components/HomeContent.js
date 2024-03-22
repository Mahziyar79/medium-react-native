import React from 'react';
import {StyleSheet ,View, Image, Text} from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeContent = () => {
    return(
        <View style={{flexDirection : 'column', width : '90%', alignSelf : 'center', marginTop : 30}}>
            <View style={styles.contentPopularText}>
                <Text style={{color : '#333', fontWeight : 'bold', fontSize : 20}}>Popular</Text>
                <Text style={{color : '#fd7129', fontSize : 12}}>Show all</Text>
            </View>

            {/* Popular Item section */}

            <View style={{flexDirection : 'row', marginTop : 35, marginBottom : 25}}>
                <Image source={require('../assets/Images/top10.png')} style={styles.popularItemImage}/>
                <View style={{flexDirection : 'column'}}>
                    <Text style={styles.popularItemText1}>ART</Text>
                    <View style={{flexDirection : 'column', top : 30, marginLeft : 15}}>
                        <Text style={styles.popularItemText2}>Top 10 techniques in 2020</Text>
                        <View style={{flexDirection : 'row', marginTop : 12}}>
                            <View style={{flexDirection : 'row', alignItems : 'center'}}>
                                <Ionicons name="time-outline" size={14} color="#333" style={{opacity : 0.5}}/>
                                <Text style={[styles.headerCoverItem, {color : '#333', opacity : 0.5}]}>1m ago</Text>
                            </View>
                            <View style={{flexDirection : 'row', alignItems : 'center', marginLeft : 30}}>
                                <MaterialCommunityIcons name="message-text-outline" size={13} color="#333" style={{opacity : 0.5}}/>
                                <Text style={[styles.headerCoverItem, {color : '#333', opacity : 0.5}]}>106 comments</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection : 'row', marginTop : 15}}>
                <Image source={require('../assets/Images/brush.png')} style={styles.popularItemImage}/>
                <View style={{flexDirection : 'column'}}>
                    <Text style={styles.popularItemText1}>DESIGN</Text>
                    <View style={{flexDirection : 'column', top : 30, marginLeft : 15}}>
                        <Text style={styles.popularItemText2}>Top 10 techniques in 2020</Text>
                        <View style={{flexDirection : 'row', marginTop : 12}}>
                            <View style={{flexDirection : 'row', alignItems : 'center'}}>
                                <Ionicons name="time-outline" size={14} color="#333" style={{opacity : 0.5}}/>
                                <Text style={[styles.headerCoverItem, {color : '#333', opacity : 0.5}]}>3h ago</Text>
                            </View>
                            <View style={{flexDirection : 'row', alignItems : 'center', marginLeft : 30}}>
                                <MaterialCommunityIcons name="message-text-outline" size={13} color="#333" style={{opacity : 0.5}}/>
                                <Text style={[styles.headerCoverItem, {color : '#333', opacity : 0.5}]}>23 comments</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentPopularText : {
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        alignItems : 'center', 
    }, 

    popularItemImage : {
        width : 60, 
        height : 60, 
        borderRadius : 15
    },

    popularItemText1 : {
        position : 'absolute',
        backgroundColor : 'red',
        color : '#fff',
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 3,
        paddingBottom : 3,
        fontWeight : 'bold',
        borderRadius : 7,
        fontSize : 10,
        marginLeft : 15
    },

    popularItemText2 : {
        fontSize : 14,
        fontWeight : 'bold'
    }
})

export {HomeContent};