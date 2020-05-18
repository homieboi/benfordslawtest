import { update } from 'ramda'
import React, { useState } from 'react'
import { View } from 'react-native-web'
import Header from './components/Header'
import NumbersList from './components/NumbersList'
import Result from './components/Result'
import './styles/main.css'

function App() {
  const oldNumbers = [1234, 2345, 3456, 4567, 5678, 6789]
  const [newNumbers, setNewNumbers] = useState(oldNumbers)

  const changeNumber = (index, value) => {
    const _newNumbers = update(index, value, newNumbers)

    setNewNumbers(_newNumbers)
  }

  return (
    <View>
      <Header />
      <View style={{ flexDirection: 'row' }}>
        <NumbersList changeNumber={changeNumber} numbers={newNumbers} />
        <Result oldNumbers={oldNumbers} newNumbers={newNumbers} />
      </View>
    </View>
  );
}

export default App;
