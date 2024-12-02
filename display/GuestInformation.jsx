import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
  Alert,
} from "react-native";
import styles from "./style/style";
import InputFieldInfo from "../component/InputFieldInfo";
import ModalPayment from "../component/ModalPayment";

const GuestInformation = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setHoLuTruError("");
    setTenLuuTruError("");
    setSoDienThoaiLuuTruError("");
  };
  const [ho, setHo] = useState("");
  const [hoLuuTru, setHoLuuTru] = useState("");
  const [ten, setTen] = useState("");
  const [tenLuuTru, setTenLuuTru] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [soDienThoaiLuuTru, setSoDienThoaiLuuTru] = useState("");
  const [email, setEmail] = useState("");

  const [hoError, setHoError] = useState("");
  const [hoLuTruError, setHoLuTruError] = useState("");
  const [tenError, setTenError] = useState("");
  const [tenLuuTruError, setTenLuuTruError] = useState("");
  const [soDienThoaiError, setSoDienThoaiError] = useState("");
  const [soDienThoaiLuuTruError, setSoDienThoaiLuuTruError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateForm = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!ho || !nameRegex.test(ho)) {
      setHoError(
        "Nội dung chứa ký tự không hợp lệ (chữ số, ký tự đặc biệt), vui lòng nhập lại"
      );
      isValid = false;
    } else {
      setHoError("");
    }
    if (!ten || !nameRegex.test(ten)) {
      setTenError(
        "Nội dung chứa ký tự không hợp lệ (chữ số, ký tự đặc biệt), vui lòng nhập lại"
      );
      isValid = false;
    } else {
      setTenError("");
    }
    const phoneRegex = /^84[0-9]{9}$/;
    if (!soDienThoai || !phoneRegex.test(soDienThoai)) {
      setSoDienThoaiError(
        "Vui lòng điền số điện thoại hợp lệ bao gồm mã quốc gia (84)"
      );
      isValid = false;
    } else {
      setSoDienThoaiError("");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Chưa đúng định dạng mail");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (isEnabled) {
      if (!hoLuuTru || !nameRegex.test(hoLuuTru)) {
        setHoLuTruError(
          "Nội dung chứa ký tự không hợp lệ (chữ số, ký tự đặc biệt), vui lòng nhập lại"
        );
        isValid = false;
      } else {
        setHoLuTruError("");
      }
      if (!tenLuuTru || !nameRegex.test(tenLuuTru)) {
        setTenLuuTruError(
          "Nội dung chứa ký tự không hợp lệ (chữ số, ký tự đặc biệt), vui lòng nhập lại"
        );
        isValid = false;
      } else {
        setTenLuuTruError("");
      }
      if (!soDienThoaiLuuTru || !phoneRegex.test(soDienThoaiLuuTru)) {
        setSoDienThoaiLuuTruError("Vui lòng điền thông tin tại đây");
        isValid = false;
      } else {
        setSoDienThoaiLuuTruError("");
      }
    }

    return isValid && setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.text, { fontSize: 16 }]}>Thông tin liên hệ</Text>
      <View>
        <View style={{ marginTop: 16 }}>
          <InputFieldInfo
            label="Họ"
            placeholder="Ví dụ: NGUYEN"
            value={ho}
            setValue={setHo}
            errorMessage={hoError}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <InputFieldInfo
            label="Tên đệm và tên"
            placeholder="Ví dụ: VAN ANH"
            value={ten}
            setValue={setTen}
            errorMessage={tenError}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <InputFieldInfo
            label="Số điện thoại"
            placeholder="Ví dụ: 0900123456"
            value={soDienThoai}
            setValue={setSoDienThoai}
            errorMessage={soDienThoaiError}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <InputFieldInfo
            label="Email"
            placeholder="Ví dụ: nguyenvananh@gmail.com"
            value={email}
            setValue={setEmail}
            errorMessage={emailError}
          />
        </View>
      </View>
      <View style={[styles.containerRow, styles.switchGroup]}>
        <Text style={styles.text}>Tôi đặt cho người khác</Text>
        <Switch
          trackColor={{ false: "#C4C4CF", true: "#DEDEED" }}
          thumbColor={isEnabled ? "#1A94FF" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <View style={{ marginTop: 12 }}>
          <Text style={[styles.text, { fontSize: 16 }]}>
            Thông tin khách lưu trú
          </Text>
          <View style={{ marginTop: 16 }}>
            <InputFieldInfo
              label="Họ"
              placeholder="Ví dụ: NGUYEN"
              value={hoLuuTru}
              setValue={setHoLuuTru}
              errorMessage={hoLuTruError}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <InputFieldInfo
              label="Tên đệm và tên"
              placeholder="Ví dụ: VAN ANH"
              value={tenLuuTru}
              setValue={setTenLuuTru}
              errorMessage={tenLuuTruError}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <InputFieldInfo
              label="Số điện thoại"
              placeholder="Ví dụ: 0900123456"
              value={soDienThoaiLuuTru}
              setValue={setSoDienThoaiLuuTru}
              errorMessage={soDienThoaiLuuTruError}
            />
          </View>
        </View>
      )}
      <View style={[styles.containerRow, { marginTop: 8 }]}>
        <Text style={styles.text}>Tổng giá tiền</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.text, { color: "#1A94FF" }]}>8.800.000đ </Text>
          <Image source={require("../assets/icons/warn.png")} />
        </View>
      </View>
      <View style={{ marginTop: 4 }}>
        <Text style={{ fontSize: 12, color: "#808089", textAlign: "right" }}>
          Đã bao gồm thuế
        </Text>
      </View>
      <View style={{ marginTop: 20, paddingBottom: 20 }}>
        <Pressable
          onPress={validateForm}
          style={({ pressed }) => [
            styles.submitButton,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "regular",
              },
            ]}
          >
            Tiếp tục
          </Text>
        </Pressable>
      </View>
      <ModalPayment
        show={isModalVisible}
        setModal={setModalVisible}
        phone={soDienThoai}
        navigation={navigation}
      />
    </ScrollView>
  );
};
export default GuestInformation;
