import { Pressable, Text } from "react-native";
import { customButtonStyles } from "./Custom-button-styles";

type CustomButtonProps = {
    content: string,
    onPress: () => void,
    variant: "white" | "green",
}

function CustomButton({
    content,
    onPress,
    variant
}: CustomButtonProps) {

    function handlePress(pressed: boolean) {
        return [
            customButtonStyles.addTaskButton,
            variant ==='white' ? customButtonStyles.whiteButton : customButtonStyles.greenButton,
            pressed && customButtonStyles.pressed
        ].filter(Boolean);
    };

    return (
        <Pressable style={({pressed}) => handlePress(pressed)} onPress={onPress}>
            <Text style={[customButtonStyles.addTaskButtonText, customButtonStyles[variant]]}>{content}</Text>
        </Pressable>
    );
};

export default CustomButton;