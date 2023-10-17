const dotenv = require('dotenv')

dotenv.config()

// Main

async function main () {
    try {
      console.log('Hola mundo!!')
    } catch (error) {
      console.error(error.message)
    }
  }
  
  main()
  