const config = require('../config/default')
const rickAndMortyService = require('./rickAndMortyService')
const rickAndMortyServiceMock = require('./rickAndMortyServiceMock')

const getServices = () => {
  if (config.environment === 'production') {
    return {
      getCharacterById: rickAndMortyService.getCharacterById,
      getCharacterData: rickAndMortyService.getCharacterData,
      getLocationData: rickAndMortyService.getLocationData,
      getEpisodeData: rickAndMortyService.getEpisodeData
    }
  } else {
    return {
      getCharacterById: rickAndMortyServiceMock.getCharacterById,
      getCharacterData: rickAndMortyServiceMock.getCharacterData,
      getLocationData: rickAndMortyServiceMock.getLocationData,
      getEpisodeData: rickAndMortyServiceMock.getEpisodeData
    }
  }
}

module.exports = { getServices }
