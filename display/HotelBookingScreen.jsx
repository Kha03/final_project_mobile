import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import DestinationModal from "../component/DestinationModal";
import { useDispatch } from "react-redux";
import { fetchHotelsByLocation } from "../redux/slices/hotelSlice";
import CheckinDateModal from "../component/CheckinDateModal";
import NightsSelectionModal from "../component/NightsSelectionModal";
import RoomSelectionModal from "../component/RoomSelectionModal";
import { updateSearch } from '../redux/slices/searchSlice';
const HotelBookingScreen = ({ navigation }) => {
  const [isRoomModalVisible, setRoomModalVisible] = useState(false);

  const openRoomModal = () => setRoomModalVisible(true);
  const closeRoomModal = () => setRoomModalVisible(false);
  const [checkoutDate, setCheckoutDate] = useState("");

  const [isNightsModalVisible, setNightsModalVisible] = useState(false);

  const openNightsModal = () => {
    setNightsModalVisible(true);
  };

  const closeNightsModal = () => {
    setNightsModalVisible(false);
  };

  const handleNightsConfirm = (selectedNights) => {
    setNights(selectedNights);
    const checkin = new Date(checkinDate.split("/").reverse().join("-"));
    checkin.setDate(checkin.getDate() + selectedNights);
    const formattedCheckout = checkin.toLocaleDateString("vi-VN"); // Định dạng ngày tháng kiểu Việt Nam
    setCheckoutDate(formattedCheckout);
    closeNightsModal();
  };

  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [checkinDate, setCheckinDate] = useState("02/02/2022");
  const [nights, setNights] = useState(1);

  const openDateModal = () => {
    setDateModalVisible(true);
  };

  const closeDateModal = () => {
    setDateModalVisible(false);
  };

  const handleDateConfirm = (date, selectedNights) => {
    setCheckinDate(date);
    setNights(selectedNights);
    closeDateModal();
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectDestination = (selectedDestination) => {
    setDestination(selectedDestination); // Cập nhật điểm đến được chọn
    closeModal();
  };

  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  // const handleSearch = () => {
  //   dispatch(fetchHotelsByLocation(location)).then(() => {
  //     navigation.navigate("HotelListingScreen"); // Chuyển sang màn hình kết quả
  //   });
  // };

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleRoomConfirm = (
    selectedRooms,
    selectedAdults,
    selectedChildren
  ) => {
    setRooms(selectedRooms);
    setAdults(selectedAdults);
    setChildren(selectedChildren);
    closeRoomModal();
  };

// Trong handleSearch
const handleSearch = () => {
  dispatch(updateSearch({
    destination,
    checkinDate,
    nights,
    rooms,
    adults,
    children,
  }));
  dispatch(fetchHotelsByLocation(destination)).then(() => {
    navigation.navigate('HotelListingScreen');
  });
};

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={require("../assets/banner.png")}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <Text style={styles.logoText}>Logo</Text>
          <Image source={require("../assets/_button.png")} />
        </View>
      </ImageBackground>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <View style={styles.inputRow}>
          <Icon name="location-outline" size={20} color="#333" />
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Điểm đến, khách sạn</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập điểm đến, khách sạn"
              value={destination}
              onFocus={openModal}
            />
          </View>
        </View>
        <DestinationModal
          visible={isModalVisible}
          onClose={closeModal}
          onSelect={handleSelectDestination}
        />
        {/* Ngày nhận phòng và số đêm nghỉ */}
        <View style={[styles.inputRow, styles.dateContainer]}>
          <TouchableOpacity style={styles.dateRowItem} onPress={openDateModal}>
            <Image source={require("../assets/Icon_lich.png")} />
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Ngày nhận phòng</Text>
              <Text style={styles.dateValue}>
                Thứ{" "}
                {checkinDate
                  ? new Date(
                      checkinDate.split("/").reverse().join("-")
                    ).getDay()
                  : ""}
                , {checkinDate || "Chưa chọn"}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateRowItem}
            onPress={openNightsModal}
          >
            <Image source={require("../assets/Icon_lich.png")} />
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Số đêm nghỉ</Text>
              <Text style={styles.dateValue}>{nights} đêm</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputRowOut}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Ngày trả phòng</Text>
            <Text style={styles.dateValue}>
              Thứ{" "}
              {checkoutDate
                ? new Date(checkoutDate.split("/").reverse().join("-")).getDay()
                : ""}
              , {checkoutDate || "Chưa chọn"}
            </Text>
          </View>
        </View>
        <CheckinDateModal
          visible={isDateModalVisible}
          onClose={closeDateModal}
          onConfirm={handleDateConfirm}
        />
        <NightsSelectionModal
          visible={isNightsModalVisible}
          onClose={closeNightsModal}
          onConfirm={handleNightsConfirm}
          currentDate={checkinDate}
        />
        {/* Số phòng và khách */}
        <View style={styles.inputRow}>
          <Image source={require("../assets/human.png")} />
          <TouchableOpacity style={styles.inputGroup} onPress={openRoomModal}>
            <Text style={styles.inputLabel}>Số phòng và khách</Text>
            <Text>{`${rooms} phòng, ${adults} người lớn, ${children} trẻ em`}</Text>
          </TouchableOpacity>
        </View>
        <RoomSelectionModal
          visible={isRoomModalVisible}
          onClose={closeRoomModal}
          onConfirm={handleRoomConfirm}
          defaultRooms={rooms}
          defaultAdults={adults}
          defaultChildren={children}
        />

        {/* Bộ lọc */}
        <View style={styles.inputRow}>
          <Image source={require("../assets/loc.png")} />
          <TouchableOpacity style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Bộ lọc</Text>
            <Text style={styles.filterText}>Chọn bộ lọc</Text>
          </TouchableOpacity>
        </View>

        {/* Tìm kiếm */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Searches */}
      <View style={styles.recentSearchContainer}>
        <View style={styles.recentSearchHeader}>
          <Text style={styles.sectionTitle}>Tra cứu gần đây</Text>
          <TouchableOpacity>
            <Text style={styles.clearText}>Xóa</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.recentSearchItem}>
            <Icon name="location-outline" size={20} color="#007bff" />
            <View style={styles.recentSearchInfo}>
              <Text style={styles.hotelName}>Khách sạn Pullman Vũng Tàu</Text>
              <Text style={styles.dateInfo}>02/02/2022 - 04/02/2022</Text>
              <Text style={styles.roomInfo}>
                2 phòng, 2 người lớn, 1 trẻ em
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recentSearchItem}>
            <Icon name="location-outline" size={20} color="#007bff" />
            <View style={styles.recentSearchInfo}>
              <Text style={styles.hotelName}>Vũng Tàu Beach Hotel</Text>
              <Text style={styles.dateInfo}>02/02/2022 - 04/02/2022</Text>
              <Text style={styles.roomInfo}>1 phòng, 2 người lớn</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Promotions */}
      <View style={styles.promoContainer}>
        <Text style={styles.sectionTitle}>Ưu đãi</Text>
        <Swiper
          style={styles.wrapper}
          autoplay={true}
          autoplayTimeout={3}
          dot={<View style={styles.customDot} />} // Custom style for inactive dot
          activeDot={<View style={styles.customActiveDot} />} // Custom style for active dot
          paginationStyle={{ bottom: -10 }} // Điều chỉnh vị trí của dot
        >
          <Image
            source={require("../assets/promotion.png")}
            style={styles.promoImage}
          />
          <Image
            source={require("../assets/promotion.png")}
            style={styles.promoImage}
          />
          <Image
            source={require("../assets/promotion.png")}
            style={styles.promoImage}
          />
        </Swiper>
      </View>

      {/* Popular Destinations */}
      <View style={styles.popularContainer}>
        <Text style={styles.sectionTitle}>Điểm đến phổ biến</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.destinationList}
        >
          <View style={styles.destinationItem}>
            <Image
              source={require("../assets/hinh1.png")}
              style={styles.destinationImage}
            />
            <Text style={styles.destinationText}>Tên điểm đến</Text>
          </View>
          <View style={styles.destinationItem}>
            <Image
              source={require("../assets/hinh2.png")}
              style={styles.destinationImage}
            />
            <Text style={styles.destinationText}>Tên điểm đến</Text>
          </View>
          <View style={styles.destinationItem}>
            <Image
              source={require("../assets/hinh3.png")}
              style={styles.destinationImage}
            />
            <Text style={styles.destinationText}>Tên điểm đến</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logoText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    elevation: 3,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
    position: "relative",
  },
  inputRowOut: {
    flexDirection: "row",
    marginBottom: 8,
    marginLeft: 18,
  },
  inputGroup: {
    marginLeft: 8,
    flex: 1,
  },
  locationIcon: {
    position: "absolute",
    top: 10, // Di chuyển icon lên trên một chút
    right: 0, // Đặt icon vào góc phải
    width: 20, // Cài đặt kích thước icon
    height: 20, // Cài đặt kích thước icon
  },
  inputLabel: {
    fontSize: 12,
    color: "#888",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 14,
    paddingVertical: 4,
    color: "#333",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  dateRowItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  dateInfo: {
    marginLeft: 8,
  },
  dateLabel: {
    fontSize: 12,
    color: "#888",
  },
  dateValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  filterText: {
    fontSize: 14,
    color: "#007bff",
  },
  searchButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  recentSearchContainer: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  recentSearchInfo: {
    marginLeft: 8,
    flex: 1,
  },
  hotelName: {
    fontSize: 14,
    color: "#333",
  },
  dateInfo: {
    fontSize: 12,
    color: "#888",
  },
  roomInfo: {
    fontSize: 12,
    color: "#333",
  },
  promoContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    elevation: 2,
    width: "100%",
    position: "relative",
    flex: 1,
  },
  promoImage: {
    width: "100%",
    height: "90%",
    borderRadius: 8,
    marginRight: 8,
  },
  wrapper: {
    height: 150,
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#007bff",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  popularContainer: {
    backgroundColor: "#fff",
    marginTop: 16,
    padding: 16,
    elevation: 2,
    flex: 1,
    position: "relative",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  destinationList: {
    flexDirection: "row",
  },
  destinationItem: {
    alignItems: "center",
    width: 120, // Set a fixed width for each item to fit the image and text
    marginRight: 10, // Add space between items
  },
  destinationImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 4,
  },
  destinationText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  recentSearchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  customDot: {
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Màu cho dot chưa chọn
    width: 20, // Chiều rộng của thanh ngang
    height: 4, // Chiều cao của thanh ngang
    borderRadius: 2,
    marginHorizontal: 4,
  },
  customActiveDot: {
    backgroundColor: "#007bff", // Màu cho dot đang chọn
    width: 20, // Chiều rộng của thanh ngang
    height: 4, // Chiều cao của thanh ngang
    borderRadius: 2,
    marginHorizontal: 4,
  },
  headerBackground: {
    width: "100%",
    height: 100, // Adjust height as needed
    justifyContent: "center",
  },
});

export default HotelBookingScreen;
