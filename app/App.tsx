import {
  Text,
  View,
  FlatList
} from 'react-native';
import { appStyles } from './AppStyles';
import { useState, useCallback } from 'react';
import Task from '../components/task/Task';
import TaskInput from '../components/task-input/Task-input';
import AddTaskButton from '../components/add-task-button/Add-task-button';

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
        <TaskInput value={task} onChangeHandler={handleOnChange}/>
        <AddTaskButton onPress={addTask} content='Add'/>
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