import React from 'react'
import VideoShow from './videoShow'


const VideoListItem = (props) => {
    const video = props.video
    const videoUrl = video.snippet.thumbnails.default.url
    const videoDescription = video.snippet.description
    console.log(props.onVideoSelect + ' select')

   

    return(
        <li onClick={() => props.onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">

                <div className="align-self-start mr-3">
                    <img className="media-object" src={videoUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading mt-0">{video.snippet.title}</div>
                </div>

            </div>
        </li>
       
    )
}

export default VideoListItem