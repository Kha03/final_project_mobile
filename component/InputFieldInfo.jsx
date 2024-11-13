import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../display/style/style";
const InputFieldInfo = ({
  label,
  placeholder,
  value,
  setValue,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={[
          styles.inputText,
          { borderColor: isFocused ? "#1A94FF" : "#DDDDE3" },
        ]}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
        placeholderTextColor={"#808089"}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default InputFieldInfo;
