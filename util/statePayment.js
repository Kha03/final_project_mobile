import styles from "../display/style/style";
export const stateMap = {
  success: { ...styles.statePayment, ...styles.stateSuccess },
  cancel: { ...styles.statePayment, ...styles.stateCancel },
  fail: { ...styles.statePayment, ...styles.stateFail },
  processing: styles.statePayment,
};
export const statusTextMap = {
  success: "Thành công",
  cancel: "Đã hủy",
  fail: "Thất bại",
  processing: "Đang xử lý",
};
