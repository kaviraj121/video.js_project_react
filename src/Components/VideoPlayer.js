import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/global';
import VideoJS from './VideoJS';
import { Link } from 'react-router-dom';



function VideoPlayer() {
    const { id } = useParams();
    

    const { videos } = useGlobalContext();
    const video = videos.find((vid) => vid.title === id);

    const videoOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        alwaysShowControls: true,
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2], // Set available playback rates
        sources: video ? video.sources.map((source) => ({ src: source, type: 'video/mp4' })) : [],
        controlBar: {
            children: [
                'playToggle',
                'volumePanel',
                'progressControl',
                'currentTimeDisplay',
                'timeDivider',
                'durationDisplay',
                'pictureInPictureToggle',
                'qualitySelector',
                'playbackRateMenuButton', 
                'fullscreenToggle',
                
            ],
            durationDisplay: {
                timeToShow: ['duration'],
                countDown: false,
            },
        },
    };

    return (
        <>
            <div className="back">
                <Link to={'/'}>
                    <i className="fas fa-arrow-left"></i> Back to Videos
                </Link>
            </div>
            <div className="video-container">
                <VideoJS options={videoOptions} />
            </div>

           
        </>
    );
}




export default VideoPlayer;
