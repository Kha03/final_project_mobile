import React, { useState, useEffect } from 'react'; // Thêm useState
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsByLocation } from '../redux/slices/hotelSlice';
import BookingHeader from "../component/BookingHeader";  // Đường dẫn phù hợp với project của bạn


const HotelListingScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  // Lấy state từ Redux Store
  const { hotels, status, error } = useSelector((state) => state.hotels);
  const location = route.params?.location || 'Vũng Tàu';



  // Gọi API khi màn hình được render
  useEffect(() => {
    dispatch(fetchHotelsByLocation(location));
  }, [dispatch, location]);

  

  return (
    <View style={styles.container}>
      {/* Header */}
      <BookingHeader />

  

      {/* Danh sách khách sạn */}
      <ScrollView style={styles.listContainer}>
        {status === 'loading' && <ActivityIndicator size="large" color="#007AFF" />}
        {status === 'failed' && <Text style={styles.errorText}>Đã xảy ra lỗi: {error}</Text>}
        {status === 'succeeded' && hotels.length === 0 && (
          <Text style={styles.noResultsText}>Không tìm thấy khách sạn nào!</Text>
        )}
        {status === 'succeeded' && hotels.map((hotel) => (
          <View key={hotel.id} style={styles.hotelItem}>
            <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
            <View style={styles.hotelDetails}>
              <Text style={styles.hotelName} numberOfLines={2}>{hotel.name}</Text>
              <View style={styles.ratingContainer}>
                <Image source={require('../assets/icons/Like.png')} style={{ width: 18, height: 18 }} />
                <Text style={styles.ratingText}>{hotel.rating}</Text>
                <Icon name="star" size={18} color="#FFD700" />
              </View>
              <Text style={styles.priceText}>{hotel.price} đ / phòng / đêm</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    padding: 4,
  },
  filterBar: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  iconText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  spacingIcon: {
    marginLeft: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  filterText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000',
  },
  popularButton: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  popularText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  hotelItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  hotelImage: {
    width: 100,
    height: 100,
  },
  hotelDetails: {
    flex: 1,
    padding: 10,
  },
  hotelName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 14,
    marginHorizontal: 6,
    color: '#4CAF50',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginVertical: 20,
  },
  noResultsText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginVertical: 20,
  },
});

export default HotelListingScreen;
