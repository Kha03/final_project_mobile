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
import BookingHeader from '../component/BookingHeader';
const ChooseRoom = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    
    <ScrollView style={{ backgroundColor: "#F5F5FA" }}>
       <BookingHeader />
      <View style={[styles.container, { marginBottom: 8, rowGap: 12 }]}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Superior 2 Twin Beds City View
        </Text>
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')} />
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')}/>
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')}/>
      </View>
      <View style={[styles.container, { marginBottom: 8, rowGap: 12 }]}>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Superior 2 Twin Beds City View
        </Text>
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')}/>
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')} />
        <HotelRoomCard setModal={handleModalVisible} onBookRoom1={() => navigation.navigate('GuestInformation')}/>
      </View>
      <RoomDetailModal visible={isModalVisible} onClose={handleModalVisible}
       onBookRoom={() => navigation.navigate('GuestInformation')}
      />
    </ScrollView>
  );
};
export default ChooseRoom;
