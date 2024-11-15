import { Image, Text, View } from "react-native";
import styles from "../display/style/style";
const CusPayInfo = () => {
  return (
    <View style={styles.paymentContentBody}>
      <Image source={require("../assets/icons/person_icon.png")} />
      <View style={{ marginStart: 8 }}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: "regular",
            },
          ]}
        >
          Tên khách
        </Text>
        <Text style={[styles.text]}>Nguyễn Văn A</Text>
      </View>
    </View>
  );
};

export default CusPayInfo;
