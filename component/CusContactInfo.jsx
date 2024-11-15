import { Image, Text, View } from "react-native";
import styles from "../display/style/style";
const CusContactInfo = () => {
  return (
    <View>
      <View style={[styles.containerRow, styles.paymentCusInfo]}>
        <Text style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}>
          Họ tên
        </Text>
        <Text style={[styles.text, { lineHeight: 18 }]}>User name</Text>
      </View>
      <View style={[styles.containerRow, styles.paymentCusInfo]}>
        <Text style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}>
          Số điện thoại
        </Text>
        <Text style={[styles.text, { lineHeight: 18 }]}>090 123 4567</Text>
      </View>
      <View style={[styles.containerRow, styles.paymentCusInfo]}>
        <Text style={[styles.text, { fontWeight: "regular", lineHeight: 18 }]}>
          Email
        </Text>
        <Text style={[styles.text, { lineHeight: 18 }]}>abc@tini.vn</Text>
      </View>
    </View>
  );
};

export default CusContactInfo;
