import React, { useState, useEffect } from 'react'
import { Layout, Row, Col } from 'antd'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

import youtube from '../apis/youtube'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    onSearch('buildings')
  })

  const onSearch = async (value) => {
    const response = await youtube.get('/search', {
      params: {
        q: value
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Layout style={{ backgroundColor: '#fff', padding: '40px' }}>
      <SearchBar onSearchSubmit={onSearch}/>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <VideoDetail video={selectedVideo}/>
        </Col>
        <Col xs={24} lg={8}>
          <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
        </Col>
      </Row>
    </Layout>
  )
}

export default App