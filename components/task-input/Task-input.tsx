import { TextInput } from "react-native";
import { taskInputStyles } from "./Task-input-styles";

type TaskInputProps = {
    value: string,
    onChangeHandler: (value: string) => void,
    placeholder: string,
}

function TaskInput({
    value,
    onChangeHandler,
    placeholder
} : TaskInputProps) {

    return (
        <TextInput
            placeholder={placeholder}
            style={taskInputStyles.input}
            value={value}
            onChangeText={onChangeHandler}
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
        />
    );
};

export default TaskInput;