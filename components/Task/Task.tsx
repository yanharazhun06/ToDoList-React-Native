import React from "react";
import { Pressable, View, Text } from "react-native";
import { taskStyles } from "./Task-styles";

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

    function handlePress(pressed: boolean) {
        return [taskStyles.task, pressed && taskStyles.pressed];
    }

    return (
        <Pressable onPress={() => removeTask(index)} style={({pressed}) => handlePress(pressed)}>
            <View>
                <Text style={taskStyles.taskText}>{content}</Text>
            </View>
        </Pressable>
    );
};

export default React.memo(Task);