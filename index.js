const dotenv = require('dotenv')

dotenv.config()

// Char counter exercise
const { charCounterExercise } = require('./exercises/charCounter')
// Episode locations exercise
const { getLocationsExercise } = require('./exercises/getLocations')

// Main

async function main () {
  try {
    await charCounterExercise()
    await getLocationsExercise()
  } catch (error) {
    console.error(error.message)
  }
}

main()
