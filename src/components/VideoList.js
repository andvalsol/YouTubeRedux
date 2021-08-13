import React from "react";
import VideoListItem from './VideoListItem'

const VideoList = ({videos, onVideoSelected}) => {
    return (
        <ul className="col-md-4 list-group">
            {videos.map((video) => (
                <VideoListItem
                    key={video.etag}
                    onVideoSelected={onVideoSelected}
                    video={video}/>
            ))}
        </ul>
    )
};

export default VideoList;
