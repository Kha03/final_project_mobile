import * as Clipboard from "expo-clipboard";
import { Image, Pressable, Text, View } from "react-native";

import { useState } from "react";
import styles from "../display/style/style";
import Toast from "./Toast";
const RoomInfoPayment = ({ code }) => {
  const [toast, setToast] = useState(false);
  const copyToClipboard = (codeCop) => {
    setToast(true);
    Clipboard.setStringAsync(codeCop);
  };
  return (
    <View style={[styles.paymentContent, { marginTop: 16 }]}>
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
            <Text style={[styles.text]}>2 giường đơn, 1 giường cỡ queen</Text>
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
              Thứ Năm, 05/12/2024 (15:00 - 03:00)
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
            <Text style={[styles.text]}>Thứ Bảy, 07/12/2024 (trước 11:00)</Text>
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
        {code && (
          <View
            style={[styles.codeCopy, styles.containerRow, { marginBottom: 16 }]}
          >
            <View>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "regular", marginBottom: 4 },
                ]}
              >
                Mã đặt chỗ
              </Text>
              <Text style={[styles.text]}>12323</Text>
            </View>
            <Pressable
              onPress={() => copyToClipboard(code)}
              style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
            >
              <Image source={require("../assets/icons/copy_icon.png")} />
            </Pressable>
          </View>
        )}
      </View>
      {toast && <Toast setToast={setToast} />}
    </View>
  );
};
export default RoomInfoPayment;
