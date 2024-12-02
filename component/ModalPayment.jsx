import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";
import styles from "../display/style/style";
import RoomPriceItem from "./RoomPriceItem";
data = [
  {
    id: 1,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "4.000.000 ₫",
  },
  {
    id: 3,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "4.000.000 ₫",
  },
  // {
  //   id: 4,
  //   des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
  //   price: "3.600.000 ₫",
  // },
  // {
  //   id: 5,
  //   des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
  //   price: "3.600.000 ₫",
  // },
  // {
  //   id: 6,
  //   des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
  //   price: "3.600.000 ₫",
  // },
  // {
  //   id: 7,
  //   des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
  //   price: "3.600.000 ₫",
  // },
];
const ModalPayment = ({ show, setModal, onCheckOut }) => {
  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={[styles.containerRow, styles.modalHeader]}>
            <Text
              style={[
                styles.text,
                { fontSize: 16, textAlign: "center", flex: 1 },
              ]}
            >
              Chi Tiết Giá
            </Text>
            <Pressable onPress={() => setModal(false)}>
              <Image source={require("../assets/icons/close.png")} />
            </Pressable>
          </View>
          <View
            style={{
              height: 250,
            }}
          >
            <FlatList
              data={data}
              renderItem={({ item }) => <RoomPriceItem item={item} />}
              keyExtractor={(item) => item.id + ""}
            />
          </View>
          <View
            style={[
              styles.containerRow,
              {
                marginTop: 8,
                borderBottomColor: "#EBEBF0",
                borderBottomWidth: 1,
                paddingBottom: 16,
              },
            ]}
          >
            <Text style={styles.text}>Thuế và phí</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.text]}>800.000đ </Text>
            </View>
          </View>
          <View style={[styles.containerRow, { marginTop: 8 }]}>
            <Text style={styles.text}>Tổng giá tiền</Text>
            <Text style={[styles.text, { color: "#1A94FF" }]}>8.800.000đ</Text>
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
              onPress={onCheckOut}
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
                Tiếp tục
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalPayment;
