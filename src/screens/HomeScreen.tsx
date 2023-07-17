import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import CategorySection from '../components/CategorySection';
import HomeHook from '../hooks/HomeHook';


const HomeScreen = ({ }) => {
    const { getCategoryData, getSubCategoryData, categoryData, subCategoryData} = HomeHook()
    
    useEffect(() => {
        getCategoryData()
    }, [])

    return (
        <View>
            <CategorySection data={categoryData} pressAction={getSubCategoryData} />
        </View>
    )
}

export default HomeScreen