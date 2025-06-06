import { StyleSheet } from "react-native";

export const customButtonStyles = StyleSheet.create({
    addTaskButton: {
    width: "40%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    backgroundColor: "#57C785",
    borderRadius: 10,
    alignSelf: "center",
  },
  pressed: {
    backgroundColor: '#3A8B5E'
  },
  addTaskButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: '600'
  },
});