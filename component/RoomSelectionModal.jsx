import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RoomSelectionModal = ({ visible, onClose, onConfirm, defaultRooms, defaultAdults, defaultChildren }) => {
  const [rooms, setRooms] = useState(defaultRooms || 1);
  const [adults, setAdults] = useState(defaultAdults || 1);
  const [children, setChildren] = useState(defaultChildren || 0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [ageModalVisible, setAgeModalVisible] = useState(false);
  const [selectedChildIndex, setSelectedChildIndex] = useState(null);
  const [selectedAge, setSelectedAge] = useState("Dưới 1 tuổi");

  const increment = (setter, value, max) => {
    if (value < max) setter(value + 1);
  };

  const decrement = (setter, value, min = 0) => {
    if (value > min) setter(value - 1);
  };

  const handleChildrenChange = (newChildrenCount) => {
    setChildren(newChildrenCount);
    const updatedAges = [...childrenAges];
    while (updatedAges.length < newChildrenCount) {
      updatedAges.push("Chọn tuổi");
    }
    while (updatedAges.length > newChildrenCount) {
      updatedAges.pop();
    }
    setChildrenAges(updatedAges);
  };

  const handleAgeSelection = (index) => {
    setSelectedChildIndex(index);
    setAgeModalVisible(true);
  };

  const confirmAgeSelection = () => {
    const updatedAges = [...childrenAges];
    updatedAges[selectedChildIndex] = selectedAge;
    setChildrenAges(updatedAges);
    setAgeModalVisible(false);
  };

  const handleConfirm = () => {
    onConfirm(rooms, adults, children, childrenAges);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Chọn số phòng và khách</Text>
          <Text style={styles.subtitle}>Tối đa 8 phòng, 32 người lớn, 6 trẻ em</Text>

          {/* Phòng */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Image source={require('../assets/icons/phong.png')} style={styles.icon} />
              <Text style={styles.label}>Phòng</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => decrement(setRooms, rooms, 1)} style={styles.counterButton}>
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{rooms}</Text>
              <TouchableOpacity onPress={() => increment(setRooms, rooms, 8)} style={styles.counterButton}>
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Người lớn */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Image source={require('../assets/icons/nguoi_lon.png')} style={styles.icon} />
              <Text style={styles.label}>Người lớn</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => decrement(setAdults, adults, 1)} style={styles.counterButton}>
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{adults}</Text>
              <TouchableOpacity onPress={() => increment(setAdults, adults, 32)} style={styles.counterButton}>
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Trẻ em */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Image source={require('../assets/icons/treem.png')} style={styles.icon} />
              <Text style={styles.label}>Trẻ em</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => decrement(handleChildrenChange, children, 0)} style={styles.counterButton}>
                <Text style={styles.counterText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterValue}>{children}</Text>
              <TouchableOpacity onPress={() => increment(handleChildrenChange, children, 6)} style={styles.counterButton}>
                <Text style={styles.counterText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Danh sách tuổi của trẻ */}
          <ScrollView style={styles.ageList}>
            {childrenAges.map((age, index) => (
              <TouchableOpacity key={index} onPress={() => handleAgeSelection(index)} style={styles.ageSelector}>
                <Text style={styles.ageText}>{`Trẻ em ${index + 1}: ${age}`}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.confirmText}>Hoàn tất</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal chọn tuổi */}
      {ageModalVisible && (
        <Modal visible={ageModalVisible} transparent animationType="slide">
          <View style={styles.overlay}>
            <View style={styles.ageModalContainer}>
              <Text style={styles.modalTitle}>Chọn tuổi cho trẻ em {selectedChildIndex + 1}</Text>
              <Picker
                selectedValue={selectedAge}
                onValueChange={(itemValue) => setSelectedAge(itemValue)}
                style={styles.pickerStyle}
              >
                <Picker.Item label="Dưới 1 tuổi" value="Dưới 1 tuổi" />
                <Picker.Item label="2 tuổi" value="2 tuổi" />
                <Picker.Item label="3 tuổi" value="3 tuổi" />
                <Picker.Item label="4 tuổi" value="4 tuổi" />
                <Picker.Item label="5 tuổi" value="5 tuổi" />
              </Picker>
              <TouchableOpacity onPress={confirmAgeSelection} style={styles.confirmButton}>
                <Text style={styles.confirmText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
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
  ageSelector: {
    marginVertical: 10,
  },
  ageText: {
    fontSize: 16,
    textAlign: 'center',
  },
  ageModalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  pickerStyle: {
    height: 150,
    width: '100%',
  },
  ageList: {
    marginVertical: 10,
  },
});

export default RoomSelectionModal;
