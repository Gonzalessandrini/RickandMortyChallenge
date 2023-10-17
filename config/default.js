module.exports = {
  urls: {
    location: process.env.API_URL + '/location/',
    episode: process.env.API_URL + '/episode/',
    character: process.env.API_URL + '/character/'
  },
  environment: process.env.NODE_ENV
}
