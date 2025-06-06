import { TouchableOpacity, Text } from "react-native";
import { addTaskButtonStyles } from "./Add-task-button-styles";

type AddTaskButtonProps = {
    content: string,
    onPress: () => void,
}

function AddTaskButton({
    content,
    onPress
}: AddTaskButtonProps) {

    return (
        <TouchableOpacity style={addTaskButtonStyles.addTaskButton} onPress={onPress}>
            <Text style={addTaskButtonStyles.addTaskButtonText}>{content}</Text>
        </TouchableOpacity>
    );
};

export default AddTaskButton;