const { getServices } = require('../services/index.js')
const formatTime = require('../utils/formatTime')
const services = getServices()

const getLocationsForEpisode = async (id) => {
  const { charactersById } = await services.getCharacterById(id)
  const location = charactersById.map(char => char.origin.name)
  const uniqueLocations = new Set(location)
  return [...uniqueLocations]
}

async function getLocationsExercise () {
  const startTime = new Date()
  const { episodeData } = await services.getEpisodeData()
  const regex = /(\d+)/g

  const locationsPromises = episodeData.map((episode) => {
    const id = episode.characters.flatMap(url => url.match(regex))
    const promises = getLocationsForEpisode(id)
    return promises
  })
  const locations = await Promise.all(locationsPromises)

  const results = episodeData.map((episode, index) => {
    return {
      name: episode.name,
      episode: episode.episode,
      locations: locations[index]
    }
  })

  const endTime = new Date()

  const totalTime = endTime - startTime
  const inTime = totalTime <= 3000

  const response = {
    exercise_name: 'Episode locations',
    time: formatTime(totalTime),
    in_time: inTime,
    results
  }

  console.log(JSON.stringify(response, null, 2))

  return response
}

module.exports = { getLocationsExercise }
