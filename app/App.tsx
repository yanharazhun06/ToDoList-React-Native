import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { appStyles } from './AppStyles';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleOnChange(value: string): void {
    setTask(value);
  };

  function addTask(): void {
    if (task) setTaskList(prev => [...prev, task]);
    setTask('');
  };

  function removeTask(indexToRemove: number): void {
    setTaskList(prev => [
      ...prev.slice(0, indexToRemove),
      ...prev.slice(indexToRemove + 1)
    ]);
  };

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Task Manager</Text>
      <View style={appStyles.taskContainer}>
        <TextInput placeholder='Enter your task here' style={appStyles.input} value={task} onChangeText={handleOnChange}/>
          <TouchableOpacity style={appStyles.addTaskButton} onPress={addTask}>
            <Text style={appStyles.addTaskButtonText}>Add</Text>
          </TouchableOpacity>
      </View>
      <View style={appStyles.taskList}>
        <FlatList data={taskList} alwaysBounceVertical={false} renderItem={task => 
            <TouchableOpacity key={task.index} onPress={() => removeTask(task.index)}>
              <View style={appStyles.task}>
                <Text style={appStyles.taskText}>{task.item}</Text>
              </View>
            </TouchableOpacity>}
          />
      </View>
    </View>
  );
}