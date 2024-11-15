import { Image, Pressable, Text, View } from "react-native";
import styles from "../display/style/style";
const ReserVationEmpty = () => {
  return (
    <View style={[styles.containerCenter]}>
      <Image source={require("../assets/imgs/emtyroom.png")} />
      <Text
        style={[
          styles.text,
          {
            fontSize: 16,
            marginTop: 12,
          },
        ]}
      >
        Bạn chưa có bất kỳ đặt chỗ nào
      </Text>
      <Text
        style={[
          styles.text,
          {
            fontWeight: "regular",
            textAlign: "center",
            marginTop: 4,
          },
        ]}
      >
        Tham khảo hàng trăm điểm đến khác trên Traveloka ngay bây giờ!
      </Text>
      <View style={{ marginTop: 12 }}>
        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            { opacity: pressed ? 0.8 : 1, width: "100%" },
          ]}
        >
          <Text
            style={[
              styles.text,
              { fontWeight: "regular", color: "#fff", textAlign: "center" },
            ]}
          >
            Đặt phòng ngay
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ReserVationEmpty;
