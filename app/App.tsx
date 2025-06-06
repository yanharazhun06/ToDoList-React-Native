import {
  Text,
  View,
  FlatList,
  Keyboard
} from 'react-native';
import { useState, useCallback } from 'react';
import { appStyles } from './AppStyles';
import Task from '../components/task/Task';
import TaskInput from '../components/task-input/Task-input';
import AddTaskButton from '../components/add-task-button/Add-task-button';

export default function App() {

  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<{id: string, task: string}[]>([]);

  function handleOnChange(value: string): void {
    setTask(value);
  };

  function addTask(): void {
    if (task) setTaskList(prev => [...prev, {id: Math.random().toString(), task: task}]);
    setTask('');
    Keyboard.dismiss();
  };

  const removeTask = useCallback((idToRemove: string): void => {
    setTaskList(prev => [...prev.filter(item => item.id !== idToRemove)]);
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
          keyExtractor={(item) => item.id}
          renderItem={task => <Task content={task.item.task} id={task.item.id} removeTask={removeTask}/>}
        />
      </View>
    </View>
  );
}