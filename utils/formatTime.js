// Función para formatear el tiempo en "s ms"

function formatTime (time) {
  const seconds = Math.floor(time / 1000)
  const milliseconds = time % 1000
  return `${seconds}s ${milliseconds}ms`
}

module.exports = formatTime
