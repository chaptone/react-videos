import React from 'react'
import VideoItem from './VideoItem'
import { List } from 'antd'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = (video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      video={video}
    />
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