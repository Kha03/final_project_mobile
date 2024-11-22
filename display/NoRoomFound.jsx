import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./style/style";
const NoRoomFound = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5FA",
      }}
    >
      <Image
        source={require("../assets/imgs/noroom_found.png")}
        style={{ width: 160, height: 160, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={[styles.text, { fontSize: 16 }]}>
        Không tìm thấy phòng phù hợp
      </Text>
      <Text style={[styles.text, { fontWeight: "regular" }]}>
        Xin vui lòng chọn tìm kiếm khác
      </Text>
    </View>
  );
};

export default NoRoomFound;
