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
  },
  paymentCusInfo: {
    marginTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBF0",
  },
});
export default styles;
