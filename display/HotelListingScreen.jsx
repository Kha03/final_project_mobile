import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsByLocation } from '../redux/slices/hotelSlice';
import BookingHeader from '../component/BookingHeader'; // Đường dẫn phù hợp với project của bạn

const HotelListingScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  // Lấy state từ Redux Store
  const { hotels, status, error } = useSelector((state) => state.hotels);
  const location = route.params?.location || 'Vũng Tàu';

  useEffect(() => {
    dispatch(fetchHotelsByLocation(location));
  }, [dispatch, location]);

  // Hàm điều hướng
  const navigateToDetail = (hotel) => {
    navigation.navigate('OverView', { hotel });
  };

  return (
    <View style={styles.container}>
      <BookingHeader />

      <ScrollView style={styles.listContainer}>
        {status === 'loading' && <ActivityIndicator size="large" color="#007AFF" />}
        {status === 'failed' && <Text style={styles.errorText}>Đã xảy ra lỗi: {error}</Text>}
        {status === 'succeeded' && hotels.length === 0 && (
          <Text style={styles.noResultsText}>Không tìm thấy khách sạn nào!</Text>
        )}
        {status === 'succeeded' &&
          hotels.map((hotel) => (
            <TouchableOpacity key={hotel.id} onPress={() => navigateToDetail(hotel)}>
              <View style={styles.hotelItem}>
                <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
                <View style={styles.hotelDetails}>
                  <Text style={styles.hotelName} numberOfLines={2}>
                    {hotel.name}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icon
                          key={index}
                          name="star"
                          size={18}
                          color={index < Math.round(hotel.rating) ? '#FFD700' : '#C0C0C0'}
                        />
                      ))}
                    </View>
                    <View style={styles.likeContainer}>
                      <Image
                        source={require('../assets/icons/Like.png')}
                        style={{ width: 18, height: 18 }}
                      />
                      <Text style={styles.ratingText}>{hotel.rating}</Text>
                    </View>
                  </View>
                  <Text style={styles.priceText}>{hotel.price} đ / phòng / đêm</Text>
                </View>
              </View>
            </TouchableOpacity>
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
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
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
    marginBottom: 8,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starIcon: {
    marginRight: 2, // Khoảng cách giữa các ngôi sao
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#4CAF50',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
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
