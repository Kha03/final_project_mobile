import { Image, ScrollView, Text, View } from "react-native";
import styles from "./style/style";
import ReserVationItem from "../component/ReservationItem";
import ReserVationEmpty from "../component/ReservationEmty";
const ReservationList = () => {
  const emty = true;
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#F5F5FA",
        paddingHorizontal: 16,
        paddingVertical: 8,
        paddingBottom: 20,
      }}
    >
      {emty ? (
        <>
          <Text style={[styles.text, { marginVertical: 12, fontSize: 16 }]}>
            01/2022
          </Text>
          <View style={{ gap: 12 }}>
            <ReserVationItem reservation={{ status: "processing" }} />
            <ReserVationItem reservation={{ status: "success" }} />
            <ReserVationItem reservation={{ status: "fail" }} />
            <ReserVationItem reservation={{ status: "cancel" }} />
          </View>
          <Text style={[styles.text, { marginVertical: 12, fontSize: 16 }]}>
            01/2022
          </Text>
          <View style={{ gap: 12 }}>
            <ReserVationItem reservation={{ status: "processing" }} />
            <ReserVationItem reservation={{ status: "success" }} />
            <ReserVationItem reservation={{ status: "fail" }} />
            <ReserVationItem reservation={{ status: "cancel" }} />
          </View>
        </>
      ) : (
        <ReserVationEmpty />
      )}
    </ScrollView>
  );
};

export default ReservationList;
