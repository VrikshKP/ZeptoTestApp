import React, { useState } from 'react'


const HomeHook = () => {
    const [categoryData, setCategoryData] = useState()
    const [subCategoryData, setSubCategoryData] = useState()

    const getCategoryData = async() => {
        let url = `https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/categories`
        const res = await fetch(url, {
            method: 'GET'
        })
        const data = res.json()
        data.then((a) => setCategoryData(a?.data[0]))
    }

    const getSubCategoryData = async(id: string) => {
        console.log('HIIIII');
        
        let url = `https://60891feca6f4a30017427aa2.mockapi.io/api/v1/ftask/`
        const res = await fetch(url + id, {
            method: 'GET'
        })
        const data = res.json()
        data.then((a) => setSubCategoryData(a?.data))
    }

    return {
        getCategoryData,
        getSubCategoryData,
        categoryData,
        subCategoryData
    }

}

export default HomeHook