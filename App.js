import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestInformation from "./display/GuestInformation";
import PaymentDetail from "./display/PaymentDetail";
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="PaymentDetail">
      <Stack.Screen name="Home" component={GuestInformation} />
      <Stack.Screen name="PaymentDetail" component={PaymentDetail} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
