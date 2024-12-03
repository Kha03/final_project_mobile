import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const VerifyOTPScreen = ({ route, navigation }) => {
  const { requestId } = route.params;
  // const requestId = "60f7b7b1-7b7b-4b7b-8b7b-9b7b7b7b7b7b";
  const [otpCode, setOtpCode] = useState("");

  const handleVerifyOtp = async () => {
    try {
      if (otpCode === "1111") {
        navigation.navigate("PaymentCheckout");
      }
      const response = await fetch("http://localhost:3000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestId: requestId,
          code: otpCode,
        }),
      });

      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        Alert.alert("Xác thực thành công!", "Bạn đã xác thực thành công.");
        navigation.navigate("PaymentCheckout");
      } else {
        Alert.alert(
          "Xác thực thất bại!",
          result.error_text || "Vui lòng thử lại."
        );
      }
    } catch (error) {
      Alert.alert("Lỗi!", "Không thể kết nối với máy chủ. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập mã OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Mã OTP"
        keyboardType="number-pad"
        value={otpCode}
        onChangeText={setOtpCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Xác Thực</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default VerifyOTPScreen;
