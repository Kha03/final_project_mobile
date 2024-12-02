import { Image, Pressable, Text, View } from "react-native";
import styles from "../display/style/style";
import { stateMap, statusTextMap } from "../util/statePayment";
const ReserVationItem = ({ reservation, onList }) => {
  const statusText = statusTextMap[reservation.status] || "Đang xử lý";
  const stateStyle = stateMap[reservation.status] || styles.statePayment;
  return (
    <Pressable 
    onPress={onList}
    style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
      <View style={styles.Reservation}>
        <Text style={[stateStyle]}>{statusText}</Text>
        <View
          style={[
            styles.paymentContentBody,
            {
              marginTop: 9,
              borderBottomWidth: 1,
              borderBottomColor: "#EBEBF0",
            },
          ]}
        >
          <Image source={require("../assets/icons/hotel_icon-gray.png")} />
          <Text style={[styles.text, { marginStart: 8 }]}>
            Khách sạn Pullman Vũng Tàu
          </Text>
        </View>
        <View
          style={[
            styles.containerRow,
            {
              marginTop: 9,
            },
          ]}
        >
          <Text style={[styles.text, { fontWeight: "medium" }]}>
            Mã đặt chỗ: 453653657
          </Text>
          <Text style={[styles.text, { color: "#1A94FF" }]}>8.000.000 ₫</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ReserVationItem;
