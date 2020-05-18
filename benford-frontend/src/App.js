import { update } from 'ramda'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native-web'
import Header from './components/Header'
import NumbersList from './components/NumbersList'
import Result from './components/Result'
import './styles/main.css'

function App() {
  const [oldNumbers, setOldNumbers] = useState([])
  const [newNumbers, setNewNumbers] = useState(oldNumbers)

  useEffect(() => {
    console.log('oldNumbers', oldNumbers)
    console.log('newNumbers', newNumbers)
  }, [oldNumbers, newNumbers])

  const changeNumber = (index, value) => {
    const _newNumbers = update(index, value, newNumbers)

    setNewNumbers(_newNumbers)
  }

  const onPressGetNumbers = () => {
    fetch('http://localhost:3003/getNumbers')
      .then(res => res.json())
      .then(numbers => {
        console.log('numbers', numbers)
        setOldNumbers(numbers)
      })
  }

  return (
    <View>
      <Header />
      <View style={{ flexDirection: 'row' }}>
        <NumbersList
          changeNumber={changeNumber}
          numbers={newNumbers}
          onPressGetNumbers={onPressGetNumbers}
        />
        <Result oldNumbers={oldNumbers} newNumbers={newNumbers} />
      </View>
    </View>
  );
}

export default App;
