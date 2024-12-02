import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HotelDetailScreen = ({ navigation, route }) => {
  const { hotel } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false); // Trạng thái "Xem thêm"

  return (
    <ScrollView style={styles.container}>
      {/* Header với hình ảnh background */}

      <ImageBackground
        source={{ uri: hotel.image }}
        style={styles.headerBackground}
        imageStyle={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{hotel.name}</Text>
        </View>
      </ImageBackground>

      {/* Nội dung chính */}
      <View style={styles.content}>
        {/* Tên khách sạn */}
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelType}>Khách sạn</Text>
        <View style={styles.addressContainer}>
          <Icon name="location-on" size={16} color="#666" />
          <Text style={styles.hotelAddress}>{hotel.address}</Text>
        </View>

        {/* Đánh giá */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingScore}>8,6</Text>
          <View style={styles.ratingText}>
            <Text style={styles.ratingLabel}>Ấn tượng</Text>
            <Text style={styles.ratingSubtitle}>từ 288 lượt đánh giá</Text>
          </View>
        </View>

        {/* Tabs đánh giá */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Phòng sạch (16)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Nhân viên thân thiện (7)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Dịch vụ tốt (5)</Text>
          </TouchableOpacity>
        </View>

        {/* Đánh giá hàng đầu */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Đánh giá hàng đầu</Text>
          <Text style={styles.reviewText}>
            Khách sạn mới và đẹp, gần biển, đi lại thuận tiện nhân viên nhiệt tình và thân thiện.{" "}
            <Text style={styles.reviewer}>Nguyen V.A.</Text>
          </Text>
        </View>

        {/* Tiện nghi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tiện nghi</Text>
          <View style={styles.facilities}>
            <Text style={styles.facility}>Nhà hàng</Text>
            <Text style={styles.facility}>Lễ tân 24h</Text>
            <Text style={styles.facility}>Hồ bơi</Text>
            <Text style={styles.facility}>Wifi</Text>
          </View>
        </View>

        {/* Giờ nhận phòng/trả phòng */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Giờ nhận phòng / trả phòng</Text>
          <Text>Nhận phòng: 15:00 - 03:00</Text>
          <Text>Trả phòng: trước 11:00</Text>
        </View>

        {/* Mô tả khách sạn */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mô tả khách sạn</Text>
          <Text style={styles.description}>
            Nam do theo bãi biển Mỹ Khê cát trắng trải dài thơ mộng, khu nghỉ dưỡng danh cho gia đình...
            {showFullDescription && " Đây là một trong những khách sạn đẳng cấp nhất tại khu vực Vũng Tàu."}
          </Text>
          <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
            <Text style={styles.seeMore}>{showFullDescription ? "Thu gọn" : "Xem thêm"}</Text>
          </TouchableOpacity>
        </View>

        {/* Giá và nút chọn phòng */}
        <View style={styles.footer}>
          <Text style={styles.price}>2.000.000 đ</Text>
          <Text style={styles.priceNote}>Đã bao gồm thuế</Text>
          <Button
            title="Chọn phòng"
            buttonStyle={styles.chooseRoomButton}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate('ChooseRoom')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Header với background
  headerBackground: {
    width: '104%',
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 16,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hotelType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  hotelAddress: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d89ef',
    marginRight: 16,
  },
  ratingText: {
    flex: 1,
  },
  ratingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tab: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
  },
  tabText: {
    fontSize: 14,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
  reviewer: {
    fontWeight: 'bold',
  },
  facilities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  facility: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  seeMore: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 8,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 16,
    paddingTop: 24, // Thêm padding-top để tạo khoảng cách trên
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '1A94FF',
    marginBottom: 5,
    textAlign: 'right'
  },
  priceNote: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  chooseRoomButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: '100%',
    paddingVertical: 12,
  },
  buttonContainer: {
    width: '90%', // Chiều rộng 90% cho nút
    alignSelf: 'center', // Căn giữa nút
  },
});

export default HotelDetailScreen;
