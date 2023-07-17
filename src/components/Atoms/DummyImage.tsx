import React, { FC } from 'react'
import { Image, Text, View } from 'react-native';

type Props = {
    url?: string,
    height: number,
    width: number
}

const DummyImage: FC<Props> = ({ 
    url,
    height = 100,
    width = 100
}) => {
    let img = `https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000`
    return (
        <Image source={{uri: url ?? img}} height={height} width={width} />
    )
}

export default DummyImage