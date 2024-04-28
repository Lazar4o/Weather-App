import React from 'react';
import { Colors, Text, TouchableOpacity } from 'react-native-ui-lib';
import { TouchableOpacityProps } from 'react-native-ui-lib/src/incubator';
import { ViewStyle } from 'react-native';

interface ChipProps extends TouchableOpacityProps {
    label: string;
    isActive?: boolean;
    customStyle?: ViewStyle;
    leftIcon?: React.JSX.Element;
}

export const Chip = ({
    label,
    isActive,
    customStyle,
    leftIcon,
    ...rest
}: ChipProps) => {
    return (
        <TouchableOpacity
            style={{
                alignSelf: 'flex-start',
                borderWidth: 1.5,
                borderColor: isActive ? Colors.green1 : Colors.green60,
                borderStyle: 'solid',
                ...customStyle
            }}
            row
            bg-green1={isActive}
            bg-transparent={!isActive}
            br100
            paddingV-8
            paddingH-20
            center
            {...rest}
        >
            {leftIcon}
            <Text text80 white={isActive} green60={!isActive}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};
