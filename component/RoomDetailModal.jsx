import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../display/style/style";
import Swiper from "react-native-swiper";
import ImageViewer from "react-native-image-zoom-viewer";

const RoomDetailModal = ({ visible, onClose, onBookRoom }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const images = [
    require("../assets/imgs/hotel_modal.png"),
    require("../assets/imgs/payment_failed.png"),
    require("../assets/imgs/payment_success.png"),
  ];

  const imageUrls = images.map((image) => ({
    url: Image.resolveAssetSource(image).uri, // Convert local image to URI
  }));

  const openModal = (index) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, { maxHeight: "700", padding: 0 }]}>
          <View
            style={[
              styles.containerRow,
              styles.modalHeader,
              {
                padding: 12,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                { fontSize: 16, textAlign: "center", flex: 1 },
              ]}
            >
              Chi Tiết Phòng
            </Text>
            <Pressable onPress={onClose}>
              <Image source={require("../assets/icons/close.png")} />
            </Pressable>
          </View>
          <ScrollView>
            <Swiper
              style={swiper.wrapper}
              // autoplay={true}
              // autoplayTimeout={3}
              dot={<View style={swiper.customDot} />}
              activeDot={<View style={swiper.customActiveDot} />}
              paginationStyle={{ bottom: 10 }}
            >
              {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => openModal(index)}>
                  <Image source={image} style={swiper.promoImage} />
                </TouchableOpacity>
              ))}
            </Swiper>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.rowGroup}>
                <View style={{ flex: 1, paddingStart: 8 }}>
                  <Text style={[styles.text, { fontSize: 16 }]}>
                    Phòng Superior, 2 giường đơn, quang cảnh thành phố
                  </Text>
                  <Text style={{ fontSize: 12, color: "#808089" }}>240m2</Text>
                </View>
              </View>
              <View style={styles.rowGroup}>
                <View style={styles.rowBody}>
                  <Image source={require("../assets/icons/person_icon.png")} />
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    2 người lớn, 1 trẻ em
                  </Text>
                </View>
                <View style={styles.rowBody}>
                  <Image source={require("../assets/icons/bed_icon.png")} />
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    2 giường đơn, 1 giường cỡ queen
                  </Text>
                </View>
              </View>
              <View style={styles.rowGroup}>
                <Text style={[styles.text]}>Tiện nghi chính</Text>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Dọn Phòng
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Dịch vụ chỉnh trang phòng bữa tối
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Dịch vụ phòng 24h
                  </Text>
                </View>
              </View>
              <View style={styles.rowGroup}>
                <Text style={[styles.text]}>Tiện nghi phòng</Text>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Máy lạnh
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Nước đóng chai miễn phí
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Ấm điện
                  </Text>
                </View>
              </View>
              <View style={styles.rowGroup}>
                <Text style={[styles.text]}>Trang bị phòng tắm</Text>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Bồn tắm
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Vòi tắm đứng
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Bộ vệ sinh cá nhân
                  </Text>
                </View>
              </View>
              <View style={styles.rowGroup}>
                <Text style={[styles.text]}>Về phòng này</Text>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Food & Drink - 24-hour room service, minibar, and free
                    bottled water
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Sleep - Premium bedding, blackout drapes/curtains, and
                    turndown service
                  </Text>
                </View>
                <View style={{ position: "relative", paddingStart: 12 }}>
                  <View
                    style={{
                      position: "absolute",
                      width: 5,
                      height: 5,
                      borderRadius: 50,
                      backgroundColor: "#000",
                      top: "50%",
                      left: 0,
                      transform: [{ translateY: -2 }],
                    }}
                  ></View>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Ghế tình yêu
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 15,
                backgroundColor: "#F5F5FA",
              }}
            ></View>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={styles.rowGroup}>
                <View style={styles.containerRow}>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Ngày
                  </Text>
                  <Text style={[styles.text]}>02/02/2022 - 04/02/2022</Text>
                </View>
                <View style={styles.containerRow}>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Số phòng
                  </Text>
                  <Text style={[styles.text]}>2</Text>
                </View>
                <View style={styles.containerRow}>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    2 Phòng/đêm
                  </Text>
                  <Text style={[styles.text]}>3.600.000 ₫</Text>
                </View>
                <View style={styles.containerRow}>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Giá tiền cho 2 đêm
                  </Text>
                  <Text style={[styles.text]}>7.200.000 ₫</Text>
                </View>
                <View style={styles.containerRow}>
                  <Text style={[styles.text, { fontWeight: "regular" }]}>
                    Thuế và phí
                  </Text>
                  <Text style={[styles.text]}>800.000 ₫</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 15,
                backgroundColor: "#F5F5FA",
              }}
            ></View>
            <View style={{ paddingHorizontal: 16 }}>
              <View style={[styles.containerRow, { marginTop: 8 }]}>
                <Text style={styles.text}>Tổng giá tiền</Text>
                <Text style={[styles.text, { color: "#1A94FF" }]}>
                  8.000.000đ
                </Text>
              </View>
              <View style={{ marginTop: 4 }}>
                <Text
                  style={{ fontSize: 12, color: "#808089", textAlign: "right" }}
                >
                  Đã bao gồm thuế
                </Text>
              </View>
              <View style={{ marginTop: 8, paddingBottom: 10 }}>
                <Pressable
                  onPress={onBookRoom}
                  style={({ pressed }) => [
                    styles.submitButton,
                    { opacity: pressed ? 0.8 : 1 },
                  ]}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#fff",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "regular",
                      },
                    ]}
                  >
                    Đặt Phòng
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
        {isModalVisible && (
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}
          >
            <ImageViewer
              imageUrls={imageUrls}
              onSwipeDown={closeModal}
              enableSwipeDown={true}
              renderHeader={() => (
                <View
                  style={{
                    position: "absolute",
                    zIndex: 9999,
                    width: "100%",
                    padding: 18,
                    flexDirection: "row-reverse",
                  }}
                >
                  <TouchableOpacity onPress={closeModal}>
                    <Image
                      source={require("../assets/icons/close.png")}
                      style={swiper.closeIcon}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </Modal>
        )}
      </View>
    </Modal>
  );
};

const swiper = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    height: 180,
  },
  customDot: {
    backgroundColor: "#fff",
    width: 16,
    height: 2,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  customActiveDot: {
    backgroundColor: "#1A94FF",
    width: 24,
    height: 2,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  promoImage: {
    width: "100%",
    height: 180,
    borderRadius: 4,
    resizeMode: "cover",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
});

export default RoomDetailModal;
