import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const BookingHeader = () => {
  const { destination, checkinDate, nights, rooms, adults, children } = useSelector(state => state.search);
  const navigation = useNavigation();
  const totalGuests = adults + children; // Tổng số người

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.destinationText}>{destination || "Chưa chọn địa điểm"}</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="ellipsis-horizontal" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Đường gạch ngang trắng */}
      <View style={styles.separator} />

      <View style={styles.iconRow}>
        <View style={styles.iconItem}>
          <Icon name="calendar-outline" size={20} color="#fff" />
          <Text style={styles.iconText}>{checkinDate || "Chưa chọn ngày"}</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="moon-outline" size={20} color="#fff" />
          <Text style={styles.iconText}>{nights} đêm</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="bed-outline" size={20} color="#fff" />
          <Text style={styles.iconText}>{rooms} phòng</Text>
        </View>
        <View style={styles.iconItem}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.iconText}>{totalGuests} người</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#007bff",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    padding: 5,
  },
  moreButton: {
    padding: 5,
  },
  destinationText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  separator: {
    height: 0.5,           // Độ cao của đường gạch ngang
    backgroundColor: "#fff",
    width: "110%",
    alignSelf: "center",
    marginVertical: 10, 
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 16,
  },
});

export default BookingHeader;
