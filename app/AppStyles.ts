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
  divider: {
    width: "90%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  taskContainer: {
    flex: 1,
    marginTop: "50%",
    gap: 20,
  },
  taskList: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 21,
    alignSelf: "center",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});