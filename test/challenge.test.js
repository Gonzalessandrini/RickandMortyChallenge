const { charCounter } = require('../exercises/charCounter')
const { getLocationsExercise } = require('../exercises/getLocations')
const { getServices } = require('../services/index')
const services = getServices()

describe('Char Counter', () => {
  test('should count characters correctly', async () => {
    const [{ characterData }, { episodeData }, { locationData }] = await Promise.all([
      services.getCharacterData(),
      services.getEpisodeData(),
      services.getLocationData()
    ])

    const countC = charCounter(characterData, 'c')
    const countE = charCounter(episodeData, 'e')
    const countL = charCounter(locationData, 'l')

    expect(countC).toBe(2)
    expect(countE).toBe(1)
    expect(countL).toBe(1)
  })

  test('should handle empty data', () => {
    const emptyData = []

    expect(() => charCounter(emptyData, 'e')).toThrow('Invalid data provided')
  })

  test('should handle non-string names', () => {
    const dataWithNonStringNames = [
      { name: 42 },
      { name: true },
      { name: null },
      { name: undefined }
    ]
    const countC = charCounter(dataWithNonStringNames, 'c')

    expect(countC).toBe(0)
  })
})

describe('getLocationsExercise', () => {
  it('should handle getLocation response', async () => {
    const response = await getLocationsExercise()

    expect(response.exercise_name).toBe('Episode locations')
    expect(typeof response.in_time).toBe('boolean')
    expect(response.results.length).toBeGreaterThan(0)
  })
})
