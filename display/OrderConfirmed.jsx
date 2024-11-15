import { useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import CusContactInfo from "../component/CusContactInfo";
import CusPayInfo from "../component/CusPayInfo";
import RoomInfoPayment from "../component/RoomInfoPayment";
import RoomPriceItem from "../component/RoomPriceItem";
import { stateMap, statusTextMap } from "../util/statePayment";
import styles from "./style/style";
data = [
  {
    id: 1,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
  {
    id: 3,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
  {
    id: 4,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
  {
    id: 5,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
  {
    id: 6,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
  {
    id: 7,
    des: "1 Pullman Vũng Tàu, Phòng Superior, 2 giường đơn, quang cảnh thành phố ",
    price: "3.600.000 ₫",
  },
];
const OrderConfirmed = ({ state }) => {
  const statusText = statusTextMap[state?.status] || "Đang xử lý";
  const stateStyle = stateMap[state?.status] || styles.statePayment;
  const [isPayInfoVisible, setPayInfoVisible] = useState(false);
  const [isContactInfoVisible, setContactInfoVisible] = useState(false);

  const payInfoHeight = useRef(new Animated.Value(0)).current;
  const contactInfoHeight = useRef(new Animated.Value(0)).current;

  const toggleSection = (isVisible, setVisible, animatedValue) => {
    setVisible(!isVisible);

    Animated.timing(animatedValue, {
      toValue: isVisible ? 0 : "100%", // Đặt chiều cao tối đa bạn muốn, ví dụ: 100.
      duration: 300, // Thời gian chuyển động (ms).
      useNativeDriver: false, // Phải để `false` khi thao tác với chiều cao.
    }).start();
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5FA",
      }}
    >
      <View>
        <View style={styles.container}>
          <Text style={[stateStyle]}>{statusText}</Text>
          <RoomInfoPayment code={1234} />
        </View>
        <View style={[styles.container, styles.paymentInfo]}>
          <Pressable style={styles.containerRow}>
            <Text style={[styles.text, { fontSize: 16 }]}>Thông tin khách</Text>
            <Image source={require("../assets/icons/arrow_bot.png")} />
          </Pressable>
          <CusPayInfo />
        </View>
        <View style={[styles.container, styles.paymentInfo]}>
          <Pressable
            style={styles.containerRow}
            onPress={() =>
              toggleSection(isPayInfoVisible, setPayInfoVisible, payInfoHeight)
            }
          >
            <Text style={[styles.text, { fontSize: 16 }]}>Thông liên hệ</Text>
            {isPayInfoVisible ? (
              <Image source={require("../assets/icons/arrow_top.png")} />
            ) : (
              <Image source={require("../assets/icons/arrow_bot.png")} />
            )}
          </Pressable>
          <Animated.View
            style={[styles.hiddenContent, { height: payInfoHeight }]}
          >
            <CusPayInfo />
          </Animated.View>
        </View>
        <View style={[styles.container, styles.paymentInfo]}>
          <Pressable style={styles.containerRow}>
            <Text style={[styles.text, { fontSize: 16, marginBottom: 14 }]}>
              Thông tin khách
            </Text>
            <Image source={require("../assets/icons/arrow_bot.png")} />
          </Pressable>
          {data.map((item) => (
            <RoomPriceItem item={item} key={item.id} />
          ))}
          <View style={[styles.containerRow, styles.paymentCusInfo]}>
            <Text
              style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
            >
              Thuế và phí
            </Text>
            <Text
              style={[styles.text, { lineHeight: 18, fontWeight: "medium" }]}
            >
              800.000 ₫
            </Text>
          </View>
          <View style={[styles.containerRow, styles.paymentCusInfo]}>
            <Text
              style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
            >
              Tổng cộng
            </Text>
            <Text style={[styles.text, { fontSize: 16, lineHeight: 18 }]}>
              8.000.000 ₫
            </Text>
          </View>
        </View>
        <View style={[styles.container, styles.paymentInfo]}>
          <View style={[styles.containerRow, { marginTop: 8 }]}>
            <Text style={styles.text}>Tổng giá tiền</Text>
            <Text style={[styles.text, { color: "#1A94FF" }]}>8.000.000đ</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            <Text
              style={{ fontSize: 12, color: "#808089", textAlign: "right" }}
            >
              Đã bao gồm thuế
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default OrderConfirmed;
