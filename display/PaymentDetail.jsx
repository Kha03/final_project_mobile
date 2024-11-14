import { Image, Pressable, ScrollView, Text, View } from "react-native";
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
                  borderBottomColor: "#EBEBF0",
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
                  borderBottomColor: "#EBEBF0",
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
                  borderBottomColor: "#EBEBF0",
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
          Phương thức thanh toán
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}
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
      <View
        style={[
          styles.container,
          styles.paymentInfo,
          {
            marginTop: 8,
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: 16 }]}>Thông tin liên hệ</Text>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Họ tên
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>User name</Text>
        </View>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Số điện thoại
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>090 123 4567</Text>
        </View>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Email
          </Text>
          <Text style={[styles.text, { lineHeight: 18 }]}>abc@tini.vn</Text>
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
        <Text style={[styles.text, { fontSize: 16, marginBottom: 14 }]}>
          Chi tiết giá
        </Text>
        {data.map((item) => (
          <View
            key={item.id}
            style={[
              styles.containerRow,
              { alignItems: "flex-start" },
              styles.itemRoom,
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  width: "50%",
                  fontWeight: "regular",
                },
              ]}
            >
              {item.des}
            </Text>
            <Text style={[styles.text, { fontWeight: "medium" }]}>
              {item.price}
            </Text>
          </View>
        ))}
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}
          >
            Thuế và phí
          </Text>
          <Text style={[styles.text, { lineHeight: 18, fontWeight: "medium" }]}>
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
      <View
        style={[
          styles.container,
          styles.paymentInfo,
          {
            marginTop: 8,
          },
        ]}
      >
        <View style={[styles.containerRow, { marginTop: 8 }]}>
          <Text style={styles.text}>Tổng giá tiền</Text>
          <Text style={[styles.text, { color: "#1A94FF" }]}>8.000.000đ</Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 12, color: "#808089", textAlign: "right" }}>
            Đã bao gồm thuế
          </Text>
        </View>
        <View style={{ marginTop: 8, paddingBottom: 8 }}>
          <Pressable
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
              Thanh toán
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
export default PaymentDetail;
