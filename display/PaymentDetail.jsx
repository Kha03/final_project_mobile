import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style/style";
const PaymentDetail = () => {
  return (
    <ScrollView style={{ backgroundColor: "#F5F5FA" }}>
      <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 16, marginTop: 12 }]}>
          Chi tiết đơn hàng
        </Text>
        <View style={[styles.paymentContent, { marginTop: 14 }]}>
          <View style={styles.paymentContentHeader}>
            <Image source={require("../assets/icons/hotel_icon.png")} />
            <Text
              style={[
                styles.text,
                {
                  marginStart: 8,
                  color: "#fff",
                },
              ]}
            >
              Khách sạn Pullman Vũng Tàu
            </Text>
          </View>
          <View style={{ paddingHorizontal: 16, backgroundColor: "#fff" }}>
            <View
              style={[
                styles.paymentContentBody,
                {
                  borderBottomColor: "#DDDDE3",
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  {
                    lineHeight: 20,
                    width: "90%",
                  },
                ]}
              >
                Phòng Superior, 2 giường đơn, quang cảnh thành phố
              </Text>
              <Text style={styles.text}>x2</Text>
            </View>
            <View style={styles.paymentContentBody}>
              <Image source={require("../assets/icons/moon.png")} />
              <View style={{ marginStart: 8 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "regular",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Số đêm
                </Text>
                <Text style={[styles.text]}>2 đêm</Text>
              </View>
            </View>
            <View style={styles.paymentContentBody}>
              <Image source={require("../assets/icons/person_icon.png")} />
              <View style={{ marginStart: 8 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "regular",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Khách
                </Text>
                <Text style={[styles.text]}>2 người lớn, 1 trẻ em</Text>
              </View>
            </View>
            <View
              style={[
                styles.paymentContentBody,
                {
                  borderBottomColor: "#DDDDE3",
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Image source={require("../assets/icons/bed_icon.png")} />
              <View style={{ marginStart: 8 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "regular",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Loại giường
                </Text>
                <Text style={[styles.text]}>
                  2 giường đơn, 1 giường cỡ queen
                </Text>
              </View>
            </View>
            <View style={styles.paymentContentBody}>
              <Image source={require("../assets/icons/clock_icon.png")} />
              <View style={{ marginStart: 8 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "regular",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Nhận phòng
                </Text>
                <Text style={[styles.text]}>
                  Thứ Tư, 02/02/2022 (15:00 - 03:00)
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.paymentContentBody,
                {
                  borderBottomColor: "#DDDDE3",
                  borderBottomWidth: 1,
                },
              ]}
            >
              <Image source={require("../assets/icons/clock_icon.png")} />
              <View style={{ marginStart: 8 }}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: "regular",
                      marginBottom: 4,
                    },
                  ]}
                >
                  Trả phòng
                </Text>
                <Text style={[styles.text]}>
                  Thứ Sáu, 04/02/2022 (trước 11:00)
                </Text>
              </View>
            </View>
            <View style={styles.paymentContentBody}>
              <Image source={require("../assets/icons/check_icon.png")} />
              <Text
                style={[styles.text, { fontWeight: "regular", marginStart: 8 }]}
              >
                Miễn phí hủy phòng
              </Text>
            </View>
            <View style={[styles.paymentContentBody]}>
              <Image source={require("../assets/icons/check_icon.png")} />
              <Text
                style={[styles.text, { fontWeight: "regular", marginStart: 8 }]}
              >
                Áp dụng chính sách đổi lịch
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.container,
          styles.paymentInfo,
          {
            marginTop: 8,
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: 16 }]}>
          Chính sách khách sạn và phòng
        </Text>
        <Text style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}>
          Áp dụng chính sách hủy phòng Miễn phí hủy trước 26-thg 5-2022 14:00.
          Nếu hủy hoặc sửa đổi sau 26-thg 5-2022 14:01, phí hủy đặt phòng sẽ
          được tính.
        </Text>
      </View>
    </ScrollView>
  );
};
export default PaymentDetail;
