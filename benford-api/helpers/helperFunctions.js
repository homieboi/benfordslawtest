const max = 9000
const min = 1000

var getRndInt = () => Math.floor(Math.random() * (max - min)) + min

const getNumbersArray = () => {
    var array = []
    
    for (var i = 0; i < 100; i++) {
        array.push(getRndInt())
    }

    return array
}

module.exports = { getNumbersArray }