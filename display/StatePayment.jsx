import { Image, Text, View } from "react-native";
import styles from "./style/style";
import { Pressable } from "react-native";
const StatePayment = ({ route , navigation }) => {
  const { state } = route.params || {};
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "center",
        },
      ]}
    >
      <View style={styles.containerCenter}>
        {state ? (
          <Image source={require("../assets/imgs/payment_success.png")} />
        ) : (
          <Image source={require("../assets/imgs/payment_failed.png")} />
        )}
        <Text
          style={[
            styles.text,
            {
              marginTop: 16,
              color: state ? "#00A100" : "#FF424F",
              fontSize: 16,
            },
          ]}
        >
          {state ? "Thanh toán thành công" : "Thanh toán thất bại"}
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Mã đặt chỗ
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>ABC123</Text>
        </View>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Phương thức thanh toán
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>Momo</Text>
        </View>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Tổng tiền
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>8.800.000 ₫</Text>
        </View>
      </View>
      <View style={[styles.containerRow, { marginTop: 12, gap: 8 }]}>
        {state ? (
          <>
            <Pressable
              onPress={() => navigation.navigate("HotelBookingScreen")}
              style={({ pressed }) => [
                styles.submitButton,
                {
                  opacity: pressed ? 0.8 : 1,
                  flex: 1,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#1A94FF",
                },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    color: "#1A94FF",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "regular",
                  },
                ]}
              >
                Về trang chủ
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("ReservationList")}
              style={({ pressed }) => [
                styles.submitButton,
                { opacity: pressed ? 0.8 : 1, flex: 1 },
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
                Chi tiết đặt chỗ
              </Text>
            </Pressable>
          </>
        ) : (
          <Pressable
            onPress={() => navigation.navigate("PaymentCheckout")}
            style={({ pressed }) => [
              styles.submitButton,
              { opacity: pressed ? 0.8 : 1, flex: 1 },
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
              Thanh toán lại
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
export default StatePayment;
