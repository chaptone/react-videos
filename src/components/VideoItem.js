import React from 'react'
import { List } from 'antd'

const VideoItem = ({ video }) => {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<img style={{width: '180px'}} src={video.snippet.thumbnails.medium.url} alt=""/>}
        title={video.snippet.title}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  )
}

export default VideoItem