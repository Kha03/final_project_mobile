import { StyleSheet, Text, View } from "react-native";

const GuestInformation = () => {
  return (
    <View style={styles.container}>
      <Text>Guest Information</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default GuestInformation;
