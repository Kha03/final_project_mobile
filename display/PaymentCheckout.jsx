import { useState } from "react";
import {
  ActivityIndicator,
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
const PaymentCheckout = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      navigation.navigate("StatePayment", { state: Math.random() < 0.5 });
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }, 2000);
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
      {refreshing ? (
        <View style={[styles.containerCenter]}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text
            style={[
              styles.text,
              {
                marginTop: 16,
                fontWeight: "regular",
              },
            ]}
          >
            Hệ thống đang xử lý,
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "regular",
              },
            ]}
          >
            vui lòng đợi trong giây lát.
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.container}>
            <Text style={[styles.text, { fontSize: 18, marginTop: 12 }]}>
              Chi tiết đơn hàng
            </Text>
            <RoomInfoPayment />
          </View>
          <View style={[styles.container, styles.paymentInfo]}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              Chính sách khách sạn và phòng
            </Text>
            <Text
              style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
            >
              Áp dụng chính sách hủy phòng Miễn phí hủy trước 26-thg 5-2022
              14:00. Nếu hủy hoặc sửa đổi sau 26-thg 5-2022 14:01, phí hủy đặt
              phòng sẽ được tính.
            </Text>
          </View>
          <View style={[styles.container, styles.paymentInfo]}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              Phương thức thanh toán
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <Image source={require("../assets/icons/paymethod.png")} />
              <Text
                style={[
                  styles.text,
                  { fontWeight: "regular", lineHeight: 18, marginStart: 9 },
                ]}
              >
                VIB ••6969
              </Text>
            </View>
          </View>
          <View style={[styles.container, styles.paymentInfo]}>
            <Text style={[styles.text, { fontSize: 16 }]}>Thông tin khách</Text>
            <CusPayInfo />
          </View>
          <View style={[styles.container, styles.paymentInfo]}>
            <Text style={[styles.text, { fontSize: 16 }]}>
              Thông tin liên hệ
            </Text>
            <CusContactInfo />
          </View>
          <View style={[styles.container, styles.paymentInfo]}>
            <Text style={[styles.text, { fontSize: 16, marginBottom: 14 }]}>
              Chi tiết giá
            </Text>
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
            <View style={{ marginTop: 8, paddingBottom: 8 }}>
              <Pressable
                style={({ pressed }) => [
                  styles.submitButton,
                  { opacity: pressed ? 0.8 : 1 },
                ]}
                onPress={() => onRefresh()}
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
                  Thanh toán
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};
export default PaymentCheckout;
