import React from 'react'
import { View } from 'react-native-web'
import Empty from './Empty'
import NumberItem from './NumberItem'

const NumbersList = ({ numbers, onPressGetNumbers }) => {
    if (!numbers.length) return <Empty onPressGetNumbers={onPressGetNumbers}/>

    return (
        <View style={{ flex: 1 }}>
            {numbers.map((value, index) => <NumberItem key={index} value={value} onPressItem={() => console.log('CLICKED ON ', index)} />)}
        </View>
    )
}

export default NumbersList