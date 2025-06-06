import { StyleSheet } from "react-native";

export const customButtonStyles = StyleSheet.create({
  addTaskButton: {
    width: "40%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    borderRadius: 10,
    alignSelf: "center",
  },
  whiteButton: {
    backgroundColor: "#fff",
  },
  greenButton: {
    backgroundColor: "#57C785"
  },
  white: {
    color: "#57C785"
  },
  green: {
    color: "#fff"
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