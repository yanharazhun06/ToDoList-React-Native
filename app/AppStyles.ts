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
  input: {
    width: 200,
    height: 50,
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "#57C785",
  },
  addTaskButton: {
    width: 80,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    backgroundColor: "#57C785",
    borderRadius: 10,
  },
  addTaskButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: '600'
  },
  taskList: {
    flex: 1,
    width: "100%",
  }
});