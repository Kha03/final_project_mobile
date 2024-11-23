import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

const RoomSelectionModal = ({ visible, onClose, onConfirm, defaultRooms, defaultAdults, defaultChildren }) => {
  const [rooms, setRooms] = useState(defaultRooms || 1);
  const [adults, setAdults] = useState(defaultAdults || 1);
  const [children, setChildren] = useState(defaultChildren || 0);

  const increment = (setter, value, max) => {
    if (value < max) setter(value + 1);
  };

  const decrement = (setter, value, min = 0) => {
    if (value > min) setter(value - 1);
  };

  const handleConfirm = () => {
    onConfirm(rooms, adults, children);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Chọn số phòng và khách</Text>
          <Text style={styles.subtitle}>Tối đa 8 phòng, 32 người lớn, 6 trẻ em</Text>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>'
              <Image source={require('../assets/icons/phong.png')} />
              <Text style={styles.label}>Phòng</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => decrement(setRooms, rooms, 1)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{rooms}</Text>
              <TouchableOpacity
                onPress={() => increment(setRooms, rooms, 8)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Image source={require('../assets/icons/nguoilon.png')} />
              <Text style={styles.label}>Người lớn</Text>
              <Text style={styles.subLabel}>Từ 18 tuổi</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => decrement(setAdults, adults, 1)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{adults}</Text>
              <TouchableOpacity
                onPress={() => increment(setAdults, adults, 32)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Image source={require('../assets/icons/treem.png')} />
              <Text style={styles.label}>Trẻ em</Text>
              <Text style={styles.subLabel}>Từ 0 đến 17 tuổi</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={() => decrement(setChildren, children, 0)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{children}</Text>
              <TouchableOpacity
                onPress={() => increment(setChildren, children, 6)}
                style={styles.counterButton}
              >
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.confirmText}>Hoàn tất</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subLabel: {
    fontSize: 12,
    color: '#888',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  counterValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default RoomSelectionModal;
