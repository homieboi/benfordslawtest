import { reduce, add } from 'ramda'
import React from 'react'
import { Text, View } from 'react-native-web'

const Result = ({ oldNumbers = [], newNumbers = [] }) => {
    const oldNumbersSum = reduce(add, 0, oldNumbers)
    const oldNumbersString = `Old sum: ${oldNumbersSum}`

    const newNumbersSum = reduce(add, 0, newNumbers)
    const newNumbersString = `New sum: ${newNumbersSum}`

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24 }}>{oldNumbersString}</Text>
            <Text style={{ fontSize: 24 }}>{newNumbersString}</Text>
        </View>
    )
}

export default Result