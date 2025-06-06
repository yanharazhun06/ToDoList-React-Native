import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleOnChange(value: string): void {
    setTask(value);
  };

  function addTask(): void {
    setTaskList(prev => [...prev, task]);
    setTask('');
  };

  function removeTask(indexToRemove: number): void {
    setTaskList(prev => [
      ...prev.slice(0, indexToRemove),
      ...prev.slice(indexToRemove + 1)
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      <View style={styles.taskContainer}>
        <TextInput placeholder='Enter your task here' style={styles.input} value={task} onChangeText={(value: string) => handleOnChange(value)}/>
          <TouchableOpacity style={styles.addTaskButton} onPress={addTask}>
            <Text style={{color: "#fff", fontSize: 18, fontWeight: '600'}}>Add</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.taskList}>
        {
          taskList.length
          ?
          taskList.map((task, index) =>
            <TouchableOpacity key={index} onPress={() => removeTask(index)}>
              <Text style={styles.task}>{task}</Text>
            </TouchableOpacity>)
          :
          null
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    alignItems: "flex-end",
    gap: 20,
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
  taskList: {
    gap: 10,
    alignItems: "center",
  },
  task: {
    fontSize: 18,
    textAlign: "center",
  },
});