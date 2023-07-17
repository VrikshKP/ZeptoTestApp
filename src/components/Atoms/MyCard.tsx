import React, { PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native';

type CardProps = {
    row?: boolean,
    height?: number
    width?: number
    center?: boolean
    style?: StyleProp<ViewStyle>
    color?: string
}


const MyCard: React.FC<PropsWithChildren<CardProps>> = ({
    children,
    row = false,
    height,
    width,
    center=false,
    style,
    color
}) => {
    return (
        <View
            style={[{
                height,
                width,
                flexDirection: row ? 'row' : 'column',
                backgroundColor: color
            }, 
            center && {
                justifyContent: 'center',
                alignContent: 'center'
            },
            style]}
        >
            {children}
        </View>
    )
}

export default MyCard