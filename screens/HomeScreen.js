import React from "react";
import { HomeBanner, HomeContent, HomeHeader } from "../components";
import { StatusBar, View } from "react-native";

function HomeScreen(props) {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <StatusBar hidden />
      <HomeHeader {...props} />
      <HomeBanner />
      <HomeContent />
    </View>
  );
}

export { HomeScreen };
