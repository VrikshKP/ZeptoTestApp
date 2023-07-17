import React, { PropsWithChildren } from 'react'
import { Image, StyleProp, Text, TextStyle, View } from 'react-native';

type TextProps = {
    bold?: boolean,
    style?: StyleProp<TextStyle>
}


const MyText: React.FC<PropsWithChildren<TextProps>> = ({
    children,
    bold,
    style,
}) => {
    return (
        <Text
        style={{
            
        }}
        >
            {children}
        </Text>
    )
}

export default MyText