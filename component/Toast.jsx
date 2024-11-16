import { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  Pressable,
} from "react-native";
import styles from "../display/style/style";
const Toast = ({ setToast, message = "Sao chép thành công" }) => {
  const bottom = useRef(new Animated.Value(-80)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  function animate() {
    Animated.timing(bottom, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start(() => {
        setToast(false);
      });
    });
  }

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View style={[styles.toastContainer, { bottom, opacity }]}>
      <Image source={require("../assets/icons/check_toast.png")} />
      <View style={{ marginLeft: 12 }}>
        <Text
          style={[
            styles.text,
            {
              color: "#fff",
              fontWeight: "regular",
            },
          ]}
        >
          {message}
        </Text>
      </View>
      <Pressable
        style={{
          marginLeft: "auto",
          padding: 4,
          borderStartColor: "#fff",
          borderStartWidth: 1,
        }}
        onPress={() => setToast(false)}
      >
        <Image source={require("../assets/icons/close_white.png")} />
      </Pressable>
    </Animated.View>
  );
};

export default Toast;
