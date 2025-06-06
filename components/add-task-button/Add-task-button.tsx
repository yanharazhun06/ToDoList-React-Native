import { Pressable, Text } from "react-native";
import { addTaskButtonStyles } from "./Add-task-button-styles";

type AddTaskButtonProps = {
    content: string,
    onPress: () => void,
}

function AddTaskButton({
    content,
    onPress
}: AddTaskButtonProps) {

    function handlePress(pressed: boolean) {
        return [addTaskButtonStyles.addTaskButton, pressed && addTaskButtonStyles.pressed];
    };

    return (
        <Pressable style={({pressed}) => handlePress(pressed)} onPress={onPress}>
            <Text style={addTaskButtonStyles.addTaskButtonText}>{content}</Text>
        </Pressable>
    );
};

export default AddTaskButton;