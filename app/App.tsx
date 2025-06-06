import {
  Text,
  View,
  FlatList,
  Keyboard,
  Modal,
  Image,
} from 'react-native';
import { useState, useCallback } from 'react';
import { appStyles } from './AppStyles';
import Task from '../components/task/Task';
import TaskInput from '../components/task-input/Task-input';
import CustomButton from '../components/custom-button/Custom-button';

export default function App() {

  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<{id: string, task: string}[]>([]);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  function handleOnChange(value: string): void {
    setTask(value);
  };

  function addTask(): void {
    if (task.trim()) {
      setTaskList(prev => [...prev, {id: Math.random().toString(), task: task}]);
      Keyboard.dismiss();
    };
    setTask('');
  };

  const removeTask = useCallback((idToRemove: string): void => {
    setTaskList(prev => [...prev.filter(item => item.id !== idToRemove)]);
  }, []);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.header}>Task Manager</Text>
      <CustomButton onPress={() => setModalVisibility(true)} content='Enter task' variant='green'/>
      {
        Boolean(taskList.length)
        &&
        <View style={appStyles.divider}></View>
      }
      <View style={appStyles.taskList}>
        <FlatList
          data={taskList}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
          renderItem={task => <Task content={task.item.task} id={task.item.id} removeTask={removeTask}/>}
        />
      </View>
      <Modal visible={modalVisibility} animationType="fade">
        <View style={appStyles.taskContainer}>
          <Image source={require('../assets/images/goal.png')} style={appStyles.logo}/>
          <Text style={appStyles.title}>Add one or more!</Text>
          <TaskInput value={task} onChangeHandler={handleOnChange} placeholder='Enter your task here'/>
          <View style={appStyles.buttons}>
            <CustomButton onPress={() => setModalVisibility(false)} content='Done' variant='white'/>
            <CustomButton onPress={addTask} content='Add' variant='white'/>
          </View>
        </View>
      </Modal>
    </View>
  );
}