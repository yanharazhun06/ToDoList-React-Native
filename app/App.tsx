import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { appStyles } from './AppStyles';
import { useState, useCallback } from 'react';
import Task from '../components/Task/Task';

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

  const removeTask = useCallback((indexToRemove: number): void => {
    setTaskList(prev => [
      ...prev.slice(0, indexToRemove),
      ...prev.slice(indexToRemove + 1)
    ]);
  }, []);

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
        <FlatList
          data={taskList}
          alwaysBounceVertical={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={task => <Task content={task.item} index={task.index} removeTask={removeTask}/>}
        />
      </View>
    </View>
  );
}