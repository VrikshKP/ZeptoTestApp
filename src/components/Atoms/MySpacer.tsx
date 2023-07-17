import React, { } from 'react'
import { Image, Text, View } from 'react-native';

type SpacerProps = {
    height?: number
    width?: number
}


const MySpacer: React.FC<SpacerProps> = ({
    height = 0,
    width = 0
}) => {
    return (
        <View 
            style={{
                height,
                width
            }}
        />
    )
}

export default MySpacer