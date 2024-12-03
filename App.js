import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import GuestInformation from "./display/GuestInformation";
import PaymentCheckout from "./display/PaymentCheckout";
import StatePayment from "./display/StatePayment";
import ReservationList from "./display/ReservationList";
import OrderConfirmed from "./display/OrderConfirmed";
import HotelListingScreen from "./display/HotelListingScreen";
import HotelBookingScreen from "./display/HotelBookingScreen";
import OverView from "./display/OverView";
import { Provider } from "react-redux";
import ChooseRoom from "./display/ChooseRoom";
import NoRoomFound from "./display/NoRoomFound";
import ChatScreen from "./display/ChatScreen";
import VerifyOTPScreen from "./display/VerifyOTPScreen";
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Provider store={store}>
      <Stack.Navigator initialRouteName="HotelBookingScreen">
        <Stack.Screen name="GuestInformation" component={GuestInformation} />
        <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
        <Stack.Screen name="StatePayment" component={StatePayment} />
        <Stack.Screen name="ReservationList" component={ReservationList} />
        <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
        <Stack.Screen
          name="VerifyOTPScreen"
          component={VerifyOTPScreen}
          options={{ title: "Xác Thực OTP" }}
        />
        <Stack.Screen
          name="ChooseRoom"
          component={ChooseRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NoRoomFound" component={NoRoomFound} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen
          name="HotelListingScreen"
          component={HotelListingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelBookingScreen"
          component={HotelBookingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OverView"
          component={OverView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
