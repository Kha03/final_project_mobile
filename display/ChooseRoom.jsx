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
import HotelRoomCard from "../component/HotelRoomCard";
import RoomDetailModal from "../component/RoomDetailModal";

const ChooseRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={{ backgroundColor: "#F5F5FA" }}>
      <View style={[styles.container, { marginBottom: 8, rowGap: 12 }]}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Superior 2 Twin Beds City View
        </Text>
        <HotelRoomCard setModal={handleModalVisible} />
        <HotelRoomCard setModal={handleModalVisible} />
        <HotelRoomCard setModal={handleModalVisible} />
      </View>
      <View style={[styles.container, { marginBottom: 8, rowGap: 12 }]}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Superior 2 Twin Beds City View
        </Text>
        <HotelRoomCard setModal={handleModalVisible} />
        <HotelRoomCard setModal={handleModalVisible} />
        <HotelRoomCard setModal={handleModalVisible} />
      </View>
      <RoomDetailModal visible={isModalVisible} onClose={handleModalVisible} />
    </ScrollView>
  );
};
export default ChooseRoom;
