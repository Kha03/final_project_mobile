import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CheckinDateModal = ({ visible, onClose, onConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    const formattedDate = day.dateString.split('-').reverse().join('/'); // Định dạng ngày DD/MM/YYYY
    setSelectedDate(formattedDate);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm(selectedDate); // Trả về ngày định dạng DD/MM/YYYY
    }
    onClose(); // Đóng modal
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Chọn ngày nhận phòng</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Lịch */}
          <Calendar
            current={new Date().toISOString().split('T')[0]}
            minDate={new Date().toISOString().split('T')[0]}
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate ? selectedDate.split('/').reverse().join('-') : null]: {
                selected: true,
                selectedColor: '#007AFF',
              },
            }}
            theme={{
              selectedDayBackgroundColor: '#007AFF',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#007AFF',
              arrowColor: '#007AFF',
            }}
          />

          {/* Footer */}
          <TouchableOpacity
            style={[
              styles.confirmButton,
              !selectedDate && { backgroundColor: '#CCCCCC' },
            ]}
            onPress={handleConfirm}
            disabled={!selectedDate}
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
  confirmButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckinDateModal;
