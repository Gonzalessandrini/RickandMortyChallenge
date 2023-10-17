const dotenv = require('dotenv')

dotenv.config()

// Char counter exercise
const { charCounterExercise } = require('./exercises/charCounter')

// Main

async function main () {
  try {
    await charCounterExercise()
  } catch (error) {
    console.error(error.message)
  }
}

main()
