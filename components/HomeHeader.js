import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function HomeHeader({navigation}) {
  return (
    <View style={styles.headerStyle}>
      <View>
        <Pressable onPress={()=> navigation.openDrawer()}>
          <MaterialIcons
            name="menu"
            size={22}
            color="#333"
            style={styles.headerIcon}
          />
        </Pressable>
      </View>
      <View>
        <Image
          style={styles.headerAvatar}
          source={require("../assets/Images/avatar.png")}
        />
        <View style={styles.badge} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    marginBottom:20
  },
  headerIcon: {
    marginTop: 20,
    marginLeft: 20,
  },
  headerAvatar: {
    backgroundColor: "#333",
    marginTop: 20,
    marginRight: 20,
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  badge: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "red",
    top: 20,
  },
});

export { HomeHeader };
