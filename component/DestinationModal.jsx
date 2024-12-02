import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DestinationModal = ({ visible, onClose, onSelect }) => {
  const handleSelectItem = (item) => {
    onSelect(item); // Gửi thông tin đã chọn về BookingScreen
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Chọn khách sạn, điểm đến</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <View style={styles.modalSearchBox}>
            <Icon name="search-outline" size={20} color="#888" />
            <TextInput
              style={styles.modalSearchInput}
              placeholder="Tìm khách sạn, điểm đến"
            />
          </View>

          {/* Tìm kiếm gần đây */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tìm kiếm gần đây</Text>
          </View>
          <ScrollView>
            {['Hà Nội, Việt Nam', 'Đà Nẵng, Việt Nam', 'Khách sạn Pullman Vũng Tàu'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.recentSearchItem}
                onPress={() => handleSelectItem(item)}
              >
                <Icon name="location-outline" size={20} color="#007bff" />
                <Text style={styles.recentSearchText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Điểm đến phổ biến */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Điểm đến phổ biến</Text>
          </View>
          <View style={styles.popularDestinations}>
            {['Vũng Tàu', 'Hồ Chí Minh', 'Sapa'].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectItem(item)}
              >
                <Text style={styles.popularDestinationItem}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  modalSearchInput: {
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearText: {
    color: '#007bff',
    fontSize: 14,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  recentSearchText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  popularDestinations: {
    marginTop: 8,
  },
  popularDestinationItem: {
    paddingVertical: 8,
    fontSize: 14,
    color: '#333',
  },
});

export default DestinationModal;
