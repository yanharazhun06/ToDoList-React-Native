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
  taskList: {
    flex: 1,
    width: "100%",
  },
  taskContainer: {
    flex: 1,
    paddingTop: "30%",
    gap: 20,
    backgroundColor: "#57C785"
  },
  title: {
    fontSize: 21,
    alignSelf: "center",
    color: "#fff"
  },
  logo: {
    width: 75,
    height: 75,
    alignSelf: 'center',
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});