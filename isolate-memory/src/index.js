// One random color string
// On purpose, copied 1 million times simply to check if this much memory is
// persisted across requests

const globalColor = `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, '0')}`
const colorArray = new Array(1000000).fill(globalColor)

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    // Check if path matches /x/y pattern where x and y are integers
    const match = path.match(/^\/(-?\d+)\/(-?\d+)$/)

    if (!match) {
      return new Response('Path must be in format /x/y where x and y are integers', {
        status: 400,
      })
    }

    const x = Number.parseInt(match[1])
    const y = Number.parseInt(match[2])

    // Create response object with debug information
    const responseData = {
      x: x,
      y: y,
      color: colorArray[colorArray.length - 1],
    }

    return new Response(JSON.stringify(responseData, null, 2), {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
      },
    })
  },
}
