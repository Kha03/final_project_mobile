import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestInformation from "./display/GuestInformation";
import PaymentCheckout from "./display/PaymentCheckout";
import StatePayment from "./display/StatePayment";
import ReservationList from "./display/ReservationList";
import OrderConfirmed from "./display/OrderConfirmed";
import HotelListingScreen from "./display/HotelListingScreen";
import HotelBookingScreen from "./display/HotelBookingScreen";
import OverView from "./display/OverView";
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="HotelBookingScreen">
      <Stack.Screen name="Home" component={GuestInformation} />
      <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
      <Stack.Screen name="StatePayment" component={StatePayment} />
      <Stack.Screen name="ReservationList" component={ReservationList} />
      <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
      <stack.Screen name="HotelListingScreen" component={HotelListingScreen} />
      <stack.Screen name="HotelBookingScreen" component={HotelBookingScreen} />
      <stack.Screen name="OverView" component={OverView} />
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
