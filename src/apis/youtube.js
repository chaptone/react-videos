import axios from 'axios'

const KEY = process.env.REACT_APP_KEY

if (!KEY) {
  throw new Error('Require Youtube API key.')
}

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
})