const { getServices } = require('../services/index.js')
const formatTime = require('../utils/formatTime')
const services = getServices()

function charCounter (data, letter) {
  // Comprueba si se ha proporcionado una letra como una cadena no vacía
  if (typeof letter !== 'string' || letter === '') {
    throw new Error('Invalid letter provided')
  }

  // Comprueba si se ha proporcionado un conjunto de datos
  if (data.length === 0) {
    throw new Error('Invalid data provided')
  }

  let count = 0

  data.forEach(item => {
    if (typeof item.name === 'string') {
      const name = item.name.toLowerCase()
      count += name.split(letter.toLowerCase()).length - 1
    }
  })
  return count
}

async function charCounterExercise () {
  const startTimeCharCounter = new Date()

  const [{ characterData }, { episodeData }, { locationData }] = await Promise.all([
    services.getCharacterData(),
    services.getEpisodeData(),
    services.getLocationData()
  ])

  const countLInLocations = charCounter(characterData, 'l')
  const countEInEpisodes = charCounter(episodeData, 'e')
  const countCInCharacters = charCounter(locationData, 'c')

  const endTimeCharCounter = new Date()

  const totalTime = endTimeCharCounter - startTimeCharCounter

  const inTime = totalTime <= 3000

  const result = {
    exercise_name: 'Char counter',
    time: formatTime(totalTime),
    in_time: inTime,
    results: [
      {
        char: 'l',
        count: countLInLocations,
        resource: 'location'
      },
      {
        char: 'e',
        count: countEInEpisodes,
        resource: 'episode'
      },
      {
        char: 'c',
        count: countCInCharacters,
        resource: 'character'
      }
    ]
  }

  console.log(JSON.stringify(result, null, 4))
}

module.exports = { charCounterExercise, charCounter }
