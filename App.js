import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestInformation from "./display/GuestInformation";
import PaymentCheckout from "./display/PaymentCheckout";
import StatePayment from "./display/StatePayment";
import ReservationList from "./display/ReservationList";
import OrderConfirmed from "./display/OrderConfirmed";
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="OrderConfirmed">
      <Stack.Screen name="Home" component={GuestInformation} />
      <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
      <Stack.Screen name="StatePayment" component={StatePayment} />
      <Stack.Screen name="ReservationList" component={ReservationList} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
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
