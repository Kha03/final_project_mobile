import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const NightsSelectionModal = ({ visible, onClose, onConfirm, currentDate }) => {
  const [selectedNights, setSelectedNights] = useState(1);

  const handleNightPress = (nights) => {
    setSelectedNights(nights);
  };

  const handleConfirm = () => {
    onConfirm(selectedNights);
    onClose();
  };

  const calculateCheckoutDate = (nights) => {
    const checkinDate = new Date(currentDate);
    checkinDate.setDate(checkinDate.getDate() + nights);
    return checkinDate.toLocaleDateString('vi-VN'); // Định dạng ngày tháng kiểu Việt Nam
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Chọn số đêm nghỉ</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Số đêm nghỉ */}
          <ScrollView style={styles.scrollContainer}>
            {[...Array(10).keys()].map((_, index) => {
              const nights = index + 1;
              return (
                <TouchableOpacity
                  key={nights}
                  style={[
                    styles.nightOption,
                    selectedNights === nights && styles.selectedOption,
                  ]}
                  onPress={() => handleNightPress(nights)}
                >
                  <Text style={styles.nightText}>{nights} đêm</Text>
                  <Text style={styles.checkoutDate}>Trả phòng: {calculateCheckoutDate(nights)}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Footer */}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>Hoàn tất</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#333333',
  },
  scrollContainer: {
    marginVertical: 16,
  },
  nightOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  selectedOption: {
    backgroundColor: '#E6F7FF',
  },
  nightText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  checkoutDate: {
    fontSize: 12,
    color: '#888888',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NightsSelectionModal;
