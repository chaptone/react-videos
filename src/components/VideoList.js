import React from 'react'
import VideoItem from './VideoItem'
import { List } from 'antd'

const VideoList = ({ videos }) => {
  const renderedList = (video) => (
    <VideoItem video={video}/>
  )
  return (
    <List
    itemLayout="horizontal"
    dataSource={videos}
    renderItem={renderedList}
    />
  )
}

export default VideoList