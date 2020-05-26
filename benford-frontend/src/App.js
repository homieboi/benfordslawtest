import { update } from 'ramda'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native-web'
import Header from './components/Header'
import NumbersList from './components/NumbersList'
import Result from './components/Result'
import './styles/main.css'

function App() {
  const [oldNumbers, setOldNumbers] = useState([])
  const [newNumbers, setNewNumbers] = useState([])

  useEffect(() => {
    console.log('oldNumbers', oldNumbers)
    console.log('newNumbers', newNumbers)
  }, [oldNumbers, newNumbers])

  const changeNumber = (index, value) => {
    const _newNumbers = update(index, value, newNumbers)

    setNewNumbers(_newNumbers)
  }

  const onPressGetNumbers = () => {
    fetch('http://localhost:3000/getDefaultNumberSet')
      .then(res => res.json())
      .then(numbers => {
        console.log('numbers', numbers)
        setOldNumbers(numbers)
        setNewNumbers(numbers)
      })
  }

  const onPressSubmit = async () => {
    const response = await fetch('http://localhost:3000/createNumberSet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'olga', numbers: newNumbers })
    })

    return console.log('response on saving new numbers', response)
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
        <Result oldNumbers={oldNumbers} newNumbers={newNumbers} onPressSubmit={onPressSubmit} />
      </View>
    </View>
  );
}

export default App;
