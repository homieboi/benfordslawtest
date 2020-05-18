import React from 'react'
import { Text, TouchableOpacity } from 'react-native-web'

const NumberItem = ({ value, onPressItem }) => (
    <TouchableOpacity onPress={onPressItem} style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
        <Text>{value}</Text>
    </TouchableOpacity>
)

export default NumberItem