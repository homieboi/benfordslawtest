import React from 'react'
import { Button, View } from 'react-native-web'

const Empty = ({ onPressGetNumbers }) => (
    <View>
        <Button
            onPress={onPressGetNumbers}
            variant="primary">
                Get Numbers
        </Button>
    </View>
)

export default Empty