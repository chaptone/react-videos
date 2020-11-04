import React, { useState } from 'react'
import { Layout } from 'antd'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

import youtube from '../apis/youtube'

const App = () => {

  const [videos, setVideos] = useState([])

  const onSearch = async (value) => {
    const response = await youtube.get('/search', {
      params: {
        q: value
      }
    })
    setVideos(response.data.items)
  }

  return (
    <Layout style={{ backgroundColor: '#fff', padding: '40px' }}>
      <SearchBar onSearchSubmit={onSearch}/>
      <VideoList videos={videos}/>
    </Layout>
  )
}

export default App