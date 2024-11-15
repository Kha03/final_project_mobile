import { Text, View } from "react-native";
import styles from "../display/style/style";
const RoomPriceItem = ({ item }) => {
  return (
    <View
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
      <Text style={[styles.text, { fontWeight: "medium" }]}>{item.price}</Text>
    </View>
  );
};
export default RoomPriceItem;
