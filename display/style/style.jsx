import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#27272A",
  },
  submitButton: {
    backgroundColor: "#1A94FF",
    paddingVertical: 8,
    borderRadius: 4,
  },
  switchGroup: {
    marginTop: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalHeader: {
    borderBottomColor: "#EBEBF0",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  itemRoom: {
    paddingVertical: 8,
    borderBottomColor: "#EBEBF0",
    borderBottomWidth: 1,
  },
  inputText: {
    height: 40,
    paddingStart: 16,
    paddingVertical: 8,
    paddingEnd: 8,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
  //payment detail
  paymentContent: {
    overflow: "hidden",
    backgroundColor: "#1A94FF",
    borderWidth: 1,
    borderColor: "#EBEBF0",
    borderRadius: 8,
  },
  paymentContentHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  paymentContentBody: {
    paddingVertical: 8,
    flexDirection: "row",
  },
  paymentInfo: {
    paddingVertical: 12,
    marginTop: 8,
  },
  paymentCusInfo: {
    marginTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBF0",
  },
  //payment ReservationList
  Reservation: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  //state payment
  statePayment: {
    minWidth: 50,
    maxWidth: 142,
    fontWeight: "regular",
    fontSize: 14,
    color: "#CC8100",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#FFF5C7",
    textAlign: "center",
  },
  stateSuccess: {
    color: "#007D3A",
    backgroundColor: "#D7FAE0",
  },
  stateCancel: {
    color: "#808089",
    backgroundColor: "#EBEBF0",
  },
  stateFail: {
    color: "#FF424F",
    backgroundColor: "#FFF0F1",
  },
  //code copy
  codeCopy: {
    backgroundColor: "#F0F8FF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  //hiddenContent
  hiddenContent: {
    overflow: "hidden",
  },
  //toast
  toastContainer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#00AB56",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
  },
  // room card
  rowBody: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  rowGroup: {
    marginTop: 10,
    rowGap: 10,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBF0",
  },
});
export default styles;
