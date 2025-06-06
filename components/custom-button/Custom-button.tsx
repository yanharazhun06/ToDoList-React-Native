import { Pressable, Text } from "react-native";
import { customButtonStyles } from "./Custom-button-styles";

type CustomButtonProps = {
    content: string,
    onPress: () => void,
}

function CustomButton({
    content,
    onPress
}: CustomButtonProps) {

    function handlePress(pressed: boolean) {
        return [customButtonStyles.addTaskButton, pressed && customButtonStyles.pressed];
    };

    return (
        <Pressable style={({pressed}) => handlePress(pressed)} onPress={onPress}>
            <Text style={customButtonStyles.addTaskButtonText}>{content}</Text>
        </Pressable>
    );
};

export default CustomButton;