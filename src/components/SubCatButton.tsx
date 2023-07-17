import React, { PropsWithChildren } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';

type TextProps = {
    style?: StyleProp<ViewStyle>
    title?: string
    onPress?: () => void
}


const SubCatButton: React.FC<PropsWithChildren<TextProps>> = ({
    children,
    style,
    title,
    onPress
}) => {
    return (
        <Pressable style={style} onPress={onPress}>
            {/* {children} */}
            <Text>{title}</Text>
        </Pressable>
    )
}

export default SubCatButton