import React from 'react'
import { List } from 'antd'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item onClick={() => onVideoSelect(video)} style={{cursor: 'pointer'}}>
      <List.Item.Meta
        avatar={
          <img
            style={{width: '160px'}}
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        }
        title={video.snippet.title}
        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  )
}

export default VideoItem