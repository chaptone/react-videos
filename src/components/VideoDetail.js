import React from 'react'
import { Card } from 'antd'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <>
      <div style={{
        position: 'relative',
        height: '0',
        paddingBottom: '56.25%',
      }}>
        <iframe
          width={'100%'}
          height={'100%'}
          style={{
            position: 'absolute',
            borderWidth: '0px'
          }}
          src={videoSrc}
          title={'video player'}
        />
      </div>
      <Card>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </Card>
    </>
  )
}

export default VideoDetail