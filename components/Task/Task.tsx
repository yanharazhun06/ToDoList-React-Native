import { TouchableOpacity, View, Text } from "react-native";
import { taskStyles } from "./TaskStyles";

type TaskProps = {
    content: string,
    index: number,
    removeTask: (indexToRemove: number) => void
}

function Task({
    content,
    index,
    removeTask
}: TaskProps) {

    return (
        <TouchableOpacity onPress={() => removeTask(index)}>
            <View style={taskStyles.task}>
                <Text style={taskStyles.taskText}>{content}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Task;