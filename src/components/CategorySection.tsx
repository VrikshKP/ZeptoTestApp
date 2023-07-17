import React from 'react'
import { FlatList, Text, View } from 'react-native';
import DummyImage from './Atoms/DummyImage';
import MyCard from './Atoms/MyCard';
import MyText from './Atoms/MyText';
import MySpacer from './Atoms/MySpacer';
import SubCatButton from './SubCatButton';


const CategorySection = ({ data, pressAction }) => {

    return (
        <>
            <MyCard
                row
                style={{
                    alignItems: 'center'
                }}
            >
                <DummyImage height={100} width={100} />
                <MySpacer width={20} />
                <MyCard style={{
                }}>
                    <MyText>{data?.category}</MyText>
                </MyCard>

            </MyCard>
            <FlatList
                data={data.sub_categories}
                renderItem={({ item }) => <SubCatButton title={item?.name} onPress={() => pressAction(item.dummy_id)} />}
                horizontal
                ItemSeparatorComponent={() => <MySpacer width={5} />}
            />
        </>
    )
}

export default CategorySection