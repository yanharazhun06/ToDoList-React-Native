import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 20,
  },
  header: {
    marginTop: 75,
    fontSize: 21,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 20,
    width: "100%",
  },
  taskList: {
    flex: 1,
    width: "100%",
  }
});