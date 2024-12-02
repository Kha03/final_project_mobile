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
const ExpandableSection = ({
  title,
  content,
  isVisible,
  setVisible,
  animatedValue,
  contentHeight,
  setContentHeight,
}) => (
  <View style={[styles.container, styles.paymentInfo]}>
    <Pressable
      style={styles.containerRow}
      onPress={() => {
        setVisible(!isVisible);
        Animated.timing(animatedValue, {
          toValue: isVisible ? 0 : contentHeight,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }}
    >
      <Text style={[styles.text, { fontSize: 16 }]}>{title}</Text>
      <Image
        source={
          isVisible
            ? require("../assets/icons/arrow_top.png")
            : require("../assets/icons/arrow_bot.png")
        }
      />
    </Pressable>

    <View
      style={{ position: "absolute", opacity: 0 }}
      onLayout={(event) => setContentHeight(event.nativeEvent.layout.height)}
    >
      {content}
    </View>

    <Animated.View style={[styles.hiddenContent, { height: animatedValue }]}>
      {isVisible && content}
    </Animated.View>
  </View>
);

const OrderConfirmed = ({  route  }) => {
  const { status } = route.params;
  
  const statusText = statusTextMap[status] || "Đang xử lý";
  const stateStyle = stateMap[status] || styles.statePayment;

  


  const [isPayInfoVisible, setPayInfoVisible] = useState(false);
  const payInfoHeight = useRef(new Animated.Value(0)).current;
  const [payInfoContentHeight, setPayInfoContentHeight] = useState(0);

  const [isContactInfoVisible, setContactInfoVisible] = useState(false);
  const contactInfoHeight = useRef(new Animated.Value(0)).current;
  const [contactInfoContentHeight, setContactInfoContentHeight] = useState(0);

  const [isRoomPriceVisible, setRoomPriceVisible] = useState(false);
  const roomPriceHeight = useRef(new Animated.Value(0)).current;
  const [roomPriceContentHeight, setRoomPriceContentHeight] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5FA",
        paddingBottom: 20,
      }}
    >
      <View>
        <View style={styles.container}>
          <Text style={[stateStyle]}>{statusText}</Text>
          <RoomInfoPayment code={1234} />
        </View>

        <ExpandableSection
          title="Thông tin khách"
          content={<CusPayInfo />}
          isVisible={isPayInfoVisible}
          setVisible={setPayInfoVisible}
          animatedValue={payInfoHeight}
          contentHeight={payInfoContentHeight}
          setContentHeight={setPayInfoContentHeight}
        />

        <ExpandableSection
          title="Thông tin liên hệ"
          content={<CusContactInfo />}
          isVisible={isContactInfoVisible}
          setVisible={setContactInfoVisible}
          animatedValue={contactInfoHeight}
          contentHeight={contactInfoContentHeight}
          setContentHeight={setContactInfoContentHeight}
        />

        <ExpandableSection
          title="Chi tiết giá"
          content={data.map((item) => (
            <RoomPriceItem item={item} key={item.id} />
          ))}
          isVisible={isRoomPriceVisible}
          setVisible={setRoomPriceVisible}
          animatedValue={roomPriceHeight}
          contentHeight={roomPriceContentHeight}
          setContentHeight={setRoomPriceContentHeight}
        />

        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18, paddingLeft: 15 }]}
          >
            Thuế và phí
          </Text>
          <Text style={[styles.text, { lineHeight: 18, fontWeight: "medium" }]}>
            800.000 ₫
          </Text>
        </View>
        <View style={[styles.containerRow, styles.paymentCusInfo]}>
          <Text
            style={[styles.text, { fontWeight: "regular", lineHeight: 18, paddingLeft: 15 }]}
          >
            Tổng cộng
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 16, lineHeight: 18, color: "#1A94FF" },
            ]}
          >
            8.000.000 ₫
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderConfirmed;
