import React from "react";
import { Pressable, View, Text } from "react-native";
import { taskStyles } from "./Task-styles";

type TaskProps = {
    content: string,
    id: string,
    removeTask: (idToRemove: string) => void
}

function Task({
    content,
    id,
    removeTask
}: TaskProps) {

    function handlePress(pressed: boolean) {
        return [taskStyles.task, pressed && taskStyles.pressed];
    }

    return (
        <Pressable onPress={() => removeTask(id)} style={({pressed}) => handlePress(pressed)}>
            <View>
                <Text style={taskStyles.taskText}>{content}</Text>
            </View>
        </Pressable>
    );
};

export default React.memo(Task);