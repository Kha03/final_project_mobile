import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styles from "../display/style/style";

const HotelRoomCard = () => {
  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: 8,
          borderColor: "#DDDDE3",
          borderWidth: 1,
        },
      ]}
    >
      <View
        style={[
          styles.containerRow,
          {
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderBottomColor: "#EBEBF0",
          },
        ]}
      >
        <Image
          source={require("../assets/imgs/review_hotel.png")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            alignSelf: "flex-start",
          }}
          resizeMode="contain"
        />
        <View style={{ flex: 1, paddingStart: 8 }}>
          <Text style={styles.text}>
            Phòng Superior, 2 giường đơn, quang cảnh thành phố
          </Text>
          <Text style={{ fontSize: 12, color: "#808089" }}>240m2</Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              paddingVertical: 3,
              paddingHorizontal: 5,
              borderWidth: 1,
              borderRadius: "50%",
              borderColor: "#EBEBF0",
              alignSelf: "flex-start",
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <Image source={require("../assets/icons/arrow_bot.png")} />
        </Pressable>
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.rowBody}>
          <Image source={require("../assets/icons/person_icon.png")} />
          <Text style={[styles.text, { fontWeight: "regular" }]}>
            2 người lớn, 1 trẻ em
          </Text>
        </View>
        <View style={styles.rowBody}>
          <Image source={require("../assets/icons/bed_icon.png")} />
          <Text style={[styles.text, { fontWeight: "regular" }]}>
            2 giường đơn, 1 giường cỡ queen
          </Text>
        </View>
      </View>
      <View style={styles.rowGroup}>
        <View style={styles.rowBody}>
          <Image source={require("../assets/icons/check_icon.png")} />
          <Text style={[styles.text, { fontWeight: "regular" }]}>
            Bữa sáng miễn phí
          </Text>
        </View>
        <View style={styles.rowBody}>
          <Image source={require("../assets/icons/nocheck_icon.png")} />
          <Text style={[styles.text, { fontWeight: "regular" }]}>
            Không hoàn tiền
          </Text>
        </View>
        <View style={styles.rowBody}>
          <Image source={require("../assets/icons/check_icon.png")} />
          <Text style={[styles.text, { fontWeight: "regular" }]}>
            Wifi miễn phí
          </Text>
        </View>
      </View>
      <View style={[styles.containerRow, { marginTop: 10 }]}>
        <Text style={[styles.text, { fontWeight: "regular" }]}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1A94FF" }}>
            2.000.000 ₫
          </Text>
          / phòng / đêm
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            {
              opacity: pressed ? 0.8 : 1,
              paddingVertical: 3,
              paddingHorizontal: 12,
            },
          ]}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>
            Đặt phòng
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HotelRoomCard; // Export the component for use in other parts of the application
