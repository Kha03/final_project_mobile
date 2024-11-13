import { StyleSheet } from "react-native";

const styleGuestInformation = StyleSheet.create({
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
    borderBottomColor: "#DDDDE3",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  itemRoom: {
    paddingVertical: 8,
    borderBottomColor: "#DDDDE3",
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
});
export default styleGuestInformation;
