const axios = require('axios')
const config = require('../config/default')

// Función para obtener datos de la API
const fetchData = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${error.message}`)
  }
}

async function getAllData (url) {
  const data = await fetchData(url)
  const totalPages = data.info.pages
  const promises = []
  for (let i = 1; i <= totalPages; i++) {
    const promise = fetchData(url + '?page=' + i)
    promises.push(promise)
  }

  const res = await Promise.all(promises)
  const results = res.flatMap((data) =>
    data.results
  )
  return results
}

async function getCharacterData () {
  const CHARACTER_URL = config.urls.character

  if (!CHARACTER_URL) {
    throw new Error('Una o más variables de entorno no están configuradas.')
  }

  const characterData = await getAllData(CHARACTER_URL)

  return { characterData }
}

async function getCharacterById (id) {
  const CHARACTER_URL = config.urls.character

  if (!CHARACTER_URL) {
    throw new Error('Una o más variables de entorno no están configuradas.')
  }

  const response = await axios.get(`${CHARACTER_URL}${id}`)

  const charactersById = response.data

  return { charactersById }
}

async function getLocationData () {
  const LOCATION_URL = config.urls.location
  if (!LOCATION_URL) {
    throw new Error('Una o más variables de entorno no están configuradas.')
  }
  const locationData = await getAllData(LOCATION_URL)

  return { locationData }
}

async function getEpisodeData () {
  const EPISODE_URL = config.urls.episode
  if (!EPISODE_URL) {
    throw new Error('Una o más variables de entorno no están configuradas.')
  }
  const episodeData = await getAllData(EPISODE_URL)

  return { episodeData }
}

module.exports = { getCharacterData, getLocationData, getEpisodeData, getCharacterById }
