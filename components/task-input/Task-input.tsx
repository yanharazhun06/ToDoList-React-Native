import { TextInput } from "react-native";
import { taskInputStyles } from "./Task-input-styles";

type TaskInputProps = {
    value: string,
    onChangeHandler: (value: string) => void,
}

function TaskInput({
    value,
    onChangeHandler
} : TaskInputProps) {

    return (
        <TextInput placeholder='Enter your task here' style={taskInputStyles.input} value={value} onChangeText={onChangeHandler}/>
    );
};

export default TaskInput;